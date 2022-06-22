import React, { useState } from 'react';

// Card Component import
import Card from '../../UI/Card';

// TV Card header import
import Header from './Header';

// Media Component Import
import Media from './Media';

// Interactions Component import
import Interaction from './Interaction';

// Description compoenent import
import Description from './Description';

// Disscussion Panel import
import DiscussionPanel from './Disscussion/DiscussionPanel';

// Discuss Form import
import DiscussForm from './DiscussForm';

// Media Popup component import
import MediaPopup from './MediaPopup';

function TVCard() {
  const [isDisscussionPanelActive, setIsDiscussionPanelActive] =
    useState(false);

  const toggleDiscussionPanel = () => {
    setIsDiscussionPanelActive(!isDisscussionPanelActive);
  };

  // Code for media popup modal
  const [initialSlide, setInitialSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickImage = () => {
    handleOpen();
  };

  return (
    <>
      <Card>
        <div>
          <Header />
          <Media
            onClickImage={onClickImage}
            setInitialSlide={setInitialSlide}
          />
          <MediaPopup
            open={open}
            handleClose={handleClose}
            initialSlide={initialSlide}
          />
          <Interaction toggleDiscussionPanel={toggleDiscussionPanel} />
          <Description />
          {isDisscussionPanelActive && <DiscussionPanel />}
          <DiscussForm />
        </div>
      </Card>
    </>
  );
}

export default TVCard;
