"use client"

import { UploadDropzone } from "@/lib/uploadthing";


interface FileUploadProps {
    onChange:(url? : string) => void;
    value: string
    endPoint:"messageFile" | "serverImage"
}



export const FileUpload = ({onChange, value, endPoint} : FileUploadProps) => {
    return ( <UploadDropzone endpoint={endPoint} onClientUploadComplete={(res) =>{
        onChange(res?.[0]?.url);
    }} onUploadError={(error: Error) =>{console.log(error);
    }} />);
}
 
