import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './messaging.scss'
import React, { useState } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from "draftjs-to-html";
import { Message } from 'iconsax-react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useMemo } from "react";

const Messaging = () => {
   
	const [ editorState, setEditorState ] = useState(EditorState.createEmpty());
  const onEditorStateChange = editorState => {
		setEditorState(editorState);
	};

  // htmlData is the html code of whatever is typed
  var htmlData = useMemo(
    () => draftToHtml(convertToRaw(editorState.getCurrentContent())),
    [editorState]
  );

    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <div className="messagingWrapper">
            {/* <h1><Message className="micon"/> Messaging</h1> */}
            <div className="messageWrap">
              <form action="">
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Subject:</label>
                    <input type="text" placeholder="To" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Message Options:</label>
                    <select name="" id="">
                      <option value="">Email Message</option>
                      <option value="">In App Notifications</option>
                    </select>
                  </div>
                </div>
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">To:</label>
                    <input type="text" placeholder="To" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Message Type:</label>
                    <select name="" id="">
                      <option value="">General Message</option>
                      <option value="">Congratulatory Message</option>
                      <option value="">Review Message</option>
                    </select>
                  </div>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="">Body:</label>
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                  />
                </div>
              </form>
            </div>
          </div>


        
        </div>
      </div>
    );
  };
  
  export default Messaging;
  

