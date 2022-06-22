import React, { useState } from 'react';

// Stylesheet import
import classes from './DiscussionPanel.module.css';

// Icon import from Feather icon
import { ChevronDown } from 'react-feather';

// Collapsse animation import from Material UI
import { Collapse } from '@mui/material';

// Replies component import
import DiscussElement from './DiscussElement';

// ! Dummy Data

const DUMMYDATA = [
  {
    id: '321dsfa',
    name: 'Mary R Hill',
    time: '2022-05-26T22:42:14.000Z',
    discuss:
      'I want to know from where you got the idea to create this wonderful project.',
    replies: [
      {
        id: '32hgjahs',
        name: 'Leticia M Stroud',
        time: '2022-05-26T22:43:14.000Z',
        repliedTo: 'someone here',
        discuss:
          'I saw a video on Youtube which was about robots changing the future and I thought I could be a part of this revolution',
      },

      {
        id: 'oaiwe2343',
        name: 'Mary R Hill',
        time: '2022-05-26T22:45:14.000Z',
        repliedTo: 'Leticia M Stroud',
        discuss: 'Thanks for sharing 👍',
      },
      {
        id: 'gjh978dask',
        name: 'Leticia M Stroud',
        time: '2022-05-26T22:47:14.000Z',
        repliedTo: 'Marry R Hill',
        discuss: `You're welcome😊`,
      },
    ],
  },
];

function DiscussionPanel() {
  const [isReplyActive, setIsReplyActive] = useState(false);

  const toggleIsActiveReply = () => {
    setIsReplyActive(!isReplyActive);
  };

  return (
    <div>
      {DUMMYDATA.map((discuss) => (
        <div className={classes.discussContainer}>
          <DiscussElement
            data={discuss}
            toggleIsActiveReply={toggleIsActiveReply}
            isReplyActive={isReplyActive}
          />
          <Collapse in={isReplyActive}>
            <div>
              {discuss.replies.map((reply) => (
                <DiscussElement data={reply} isReply={true} />
              ))}
            </div>
          </Collapse>

          <div className={classes.footer}>
            <p
              className={`element-description ${classes.toggleReplyText}`}
              onClick={toggleIsActiveReply}
            >
              {/* {isReplyActive
                ? 'Hide disscussions'
                : `${discuss.replies.length} discussions ${(<ChevronDown />)}`} */}
              {discuss.replies.length} discussions{' '}
              {<ChevronDown className={classes.toggleReplyIcon} />}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscussionPanel;
