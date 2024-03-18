import {Editor } from 'react-draft-wysiwyg';
import '../../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';
const TextEditor = ({onChange , description} : {onChange : (value : string)=> void , description? : string}) =>{
    let contentEditor
    console.log(description);
    
    if(description){
        const contentBlock = htmlToDraft(description)
        
       if(contentBlock.contentBlocks){
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
         contentEditor = EditorState.createWithContent(contentState) 
       }
    }
    else{
        contentEditor = EditorState.createEmpty()
    }
    const handleChange = (data : Draft.DraftModel.Encoding.RawDraftContentState) =>{
            const html = draftToHtml(data)
            onChange(html)
    }
    return( 
    <div dir='lrt'>

     <Editor defaultEditorState={contentEditor}  onContentStateChange={handleChange}/>
     </div>
    )
}
export default TextEditor