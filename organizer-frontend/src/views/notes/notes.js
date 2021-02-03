import React, { useState } from "react";
import Nav from "../../components/navigation/navigation";
import Note from "../../components/note/note";
import styles from "./notes.module.scss";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions";

const Notes = ({ notes, fetchNotes }) => {
  const [getNotes, setGetNotes] = useState(false);
  return (
    <>
    <Nav /> 
    {getNotes === false ? (
        <div className={styles.noteButton}>
          <Button
            variant="primary"
            onClick={() => {
              setGetNotes(true);
              fetchNotes();
            }}
          >
            Get your notes
          </Button>
        </div>
      ):<div className={styles.refreshButtonWrapper}>
        <Button
            variant="success"
            onClick={() => {
              fetchNotes();
            }}
          >Refresh</Button>
      </div> }
             
      <div className={styles.wrapper}>
        {notes.map((item, i) => {
          return <Note item={item} key={i} />;
        })}
      </div>
      
    </>
  );
};
const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};
const mapDispatchToProps = (dispatch) => {
  return { fetchNotes: () => dispatch(fetchNotes()) }; //note the dispatch call
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
