// Stylesheet import
import classes from './SearchInput.module.css';

// Icon import from Feather icon
import { Search as SearchIcon, X as Close } from 'react-feather';

const SearchInput = (props) => {
  return (
    <form className={classes.form} style={{ width: props.width }}>
      <input
        type={props.data.type}
        className={classes.input}
        placeholder="Search Srijcon"
        autoFocus={props.showClose}
        style={{ minWidth: props.width }}
      />
      <SearchIcon
        className={classes.icon}
        sx={{ fontSize: 25, color: '#b9b9b9' }}
      />
      {props.showClose && (
        <Close
          sx={{ fontSize: 18, color: '#b9b9b9' }}
          onClick={props.closeInput}
          className={classes.close}
        />
      )}
    </form>
  );
};

SearchInput.defalutProps = {
  showClose: false,
};

export default SearchInput;
