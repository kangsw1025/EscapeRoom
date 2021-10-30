/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  min-width: 900px;
  height: 100%;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-size: 32px;
  margin-bottom: 20px;
  letter-spacing: -1px;
`;

const Map = styled.div`
  width: 900px;
  height: 700px;
`;

export default () => {
  const onClick = () => {
    window.open(
      "https://map.kakao.com/link/map/비밀의화원 시네마틱혜화,37.58332334071145,127.00096233213092"
    );
  };

  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.58332334071145, 127.00096233213092),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
    map.setDraggable(false);
    map.setZoomable(false);

    var markerPosition = new kakao.maps.LatLng(
      37.58332334071145,
      127.00096233213092
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);
  return (
    <MapContainer>
      <Header>방탈출 카페 오시는 길</Header>
      <Map id="map" onClick={onClick} />
    </MapContainer>
  );
};
