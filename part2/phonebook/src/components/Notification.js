const Notification = ({message,type})=>{
    const successStyle ={
        backgroundColor:'gray',
        border:'3px solid green',
        padding:10,
        color:'green',
        fontSize:20,
        borderRadius:10
    }

    const errorStyle ={
        backgroundColor:'grey',
        border:'3px solid red',
        padding:10,
        color:'red',
        fontSize:20,
        borderRadius:10
    }
    if(message===null){
        return null;
    }
    return (
        <div style={type==='success'?successStyle:errorStyle}>
            {message}
        </div>
    )
}
export default Notification;