import getRoomIdFromQueryParameters from "./getRoomIdFromQueryParameters";

function identifyUserType() {
    if (getRoomIdFromQueryParameters() === null) {
        console.log('sender');
    } else {
        console.log('receiver');
    }
}

export default identifyUserType;
