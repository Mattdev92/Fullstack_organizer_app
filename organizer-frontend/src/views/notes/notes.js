import React, {useState, useEffect } from "react";
import Nav from "../../components/navigation/navigation";
import Note from "../../components/note/note";
import styles from "./notes.module.scss";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions";
import Add from "../../assets/add.svg";
import Create from '../create/create';
const Notes = ({ notes, fetchNotes }) => {
  const [createModal,setCreateModal]=useState(false);
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);
  return (
    <>
      <Nav />
      <Create show={createModal} onHide={() => setCreateModal(false)} />
      <div className={styles.refreshButtonWrapper}>
        <Button
          variant="success"
          onClick={() => {
            fetchNotes();
          }}
        >
          Refresh
        </Button>
      </div>
      <div className={styles.wrapper}>
        {notes.map((item, i) => {
          return <Note item={item} key={i} />;
        })}
        <img src={Add} className={styles.add} alt="add" onClick={()=>setCreateModal(true)} />
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
