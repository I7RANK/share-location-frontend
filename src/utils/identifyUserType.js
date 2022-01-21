import getRoomIdFromQueryParameters from "./getRoomIdFromQueryParameters";
import socketConnection from "./socket-io/socketConnection";

function identifyUserType() {
    const roomId = getRoomIdFromQueryParameters();

    if (roomId === null) {
        console.log('sender');
        socketConnection('sender');
    } else {
        console.log('receiver');
        socketConnection('receiver', roomId);
    }
}

export default identifyUserType;
