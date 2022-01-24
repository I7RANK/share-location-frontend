import getRoomIdFromQueryParameters from "./getRoomIdFromQueryParameters";
import socketConnection from "./socket-io/socketConnection";

function identifyUserType() {
    const roomId = getRoomIdFromQueryParameters();

    if (roomId === null) {
        console.log('sender');
        return socketConnection('sender');
    } else {
        console.log('receiver');
        return socketConnection('receiver', roomId);
    }
}

export default identifyUserType;
