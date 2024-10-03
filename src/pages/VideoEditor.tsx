// VideoEditor.tsx
import { Editor } from "@/components/editor";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

interface VideoEditorProps {
    // Define any props you expect to pass into VideoEditor here
}

const VideoEditor: React.FC<VideoEditorProps> = (props) => {


    return (
        <>
          <Editor/>
        </>
    );
};

export default VideoEditor;
