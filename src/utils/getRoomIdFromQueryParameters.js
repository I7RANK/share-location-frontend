function getRoomIdFromQueryParameters() {
    // replace because of the react routes
    const url = new URL(window.location.href.replace('#/map', 'map'));

    return url.searchParams.get('roomId');
}

export default getRoomIdFromQueryParameters;
