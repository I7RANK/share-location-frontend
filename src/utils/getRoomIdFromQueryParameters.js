function getRoomIdFromQueryParameters() {
    const url = new URL(window.location.href);

    return url.searchParams.get('roomId');
}

export default getRoomIdFromQueryParameters;
