require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "02d93ceefccc4a72ad89030ac5252e21"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv",
    center: [-90, 44],
    zoom: 5
  });
});
