import React, { useEffect, useRef, useState, useCallback } from 'react'
import Globe from 'react-globe.gl';
import * as THREE from 'three'


const MainGlobe = () => {

  const globeEl = useRef();
  const [popData, setPopData] = useState([]);
  const ARC_REL_LEN = 0.4; // relative to whole arc
  const FLIGHT_TIME = 1000;
  const NUM_RINGS = 3;
  const RINGS_MAX_R = 5; // deg
  const RING_PROPAGATION_SPEED = 5; // deg/sec

  const [arcsData, setArcsData] = useState([]);
  const [ringsData, setRingsData] = useState([]);

  const prevCoords = useRef({ lat: 0, lng: 0 });
  const emitArc = useCallback(({ lat: endLat, lng: endLng }) => {
    const { lat: startLat, lng: startLng } = prevCoords.current;
    prevCoords.current = { lat: endLat, lng: endLng };

    // add and remove arc after 1 cycle
    const arc = { startLat, startLng, endLat, endLng };
    setArcsData(curArcsData => [...curArcsData, arc]);
    setTimeout(() => setArcsData(curArcsData => curArcsData.filter(d => d !== arc)), FLIGHT_TIME * 2);

    // add and remove start rings
    const srcRing = { lat: startLat, lng: startLng };
    setRingsData(curRingsData => [...curRingsData, srcRing]);
    setTimeout(() => setRingsData(curRingsData => curRingsData.filter(r => r !== srcRing)), FLIGHT_TIME * ARC_REL_LEN);

    // add and remove target rings
    setTimeout(() => {
      const targetRing = { lat: endLat, lng: endLng };
      setRingsData(curRingsData => [...curRingsData, targetRing]);
      setTimeout(() => setRingsData(curRingsData => curRingsData.filter(r => r !== targetRing)), FLIGHT_TIME * ARC_REL_LEN);
    }, FLIGHT_TIME);
  }, []);

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;
  }, []);



  return <Globe
    ref={globeEl}
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    onGlobeClick={emitArc}
    arcsData={arcsData}
    arcColor={() => 'lightblue'}
    arcDashLength={ARC_REL_LEN}
    arcDashGap={2}
    arcDashInitialGap={1}
    arcDashAnimateTime={FLIGHT_TIME}
    arcsTransitionDuration={0}
    ringsData={ringsData}
    ringColor={() => t => `rgba(155,50,50,${1 - t})`}
    ringMaxRadius={RINGS_MAX_R}
    ringPropagationSpeed={RING_PROPAGATION_SPEED}
    ringRepeatPeriod={FLIGHT_TIME * ARC_REL_LEN / NUM_RINGS}
  />;
};

export default MainGlobe
