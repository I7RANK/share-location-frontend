import getRoomIdFromQueryParameters from "./getRoomIdFromQueryParameters";
import socketConnection from "./socket-io/socketConnection";

function identifyUserType() {
    const roomId = getRoomIdFromQueryParameters();

    if (roomId === null) {
        console.log('sender');
        return {
            socket: socketConnection('sender'),
            userType: 'sender'
        }
    } else {
        console.log('receiver');
        return {
            socket: socketConnection('receiver', roomId),
            userType: 'receiver'
        }
    }
}

export default identifyUserType;
