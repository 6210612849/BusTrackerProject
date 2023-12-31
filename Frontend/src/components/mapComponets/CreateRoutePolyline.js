import React, { useState, useEffect, useRef } from 'react';
import { Marker, Polyline } from '@react-google-maps/api';

const greenLine = [
    { lat: 14.066854, lng: 100.613003 },
    { lat: 14.066801, lng: 100.616053 },
    { lat: 14.066880, lng: 100.616135 },
    { lat: 14.069117, lng: 100.616138 },
    { lat: 14.073263, lng: 100.616170 },
    { lat: 14.073263, lng: 100.616170 },
    { lat: 14.073442, lng: 100.615752 },
    { lat: 14.074046, lng: 100.615738 },
    { lat: 14.074138, lng: 100.616231 },
    { lat: 14.072170, lng: 100.616185 },
    { lat: 14.07214, lng: 100.613277 },
    { lat: 14.072104, lng: 100.611996 },
    { lat: 14.072086, lng: 100.608293 },
    { lat: 14.072081, lng: 100.606335 },
    { lat: 14.072055, lng: 100.605229 },
    { lat: 14.072065, lng: 100.604206 },
    { lat: 14.072022, lng: 100.602106 },
    { lat: 14.072038, lng: 100.601618 },
    { lat: 14.072710, lng: 100.601600 },
    { lat: 14.074398, lng: 100.601591 },
    { lat: 14.075424, lng: 100.601576 },
    { lat: 14.075986, lng: 100.601597 },
    { lat: 14.075999, lng: 100.60071 },
    { lat: 14.076126, lng: 100.598776 },
    { lat: 14.076197, lng: 100.59746 },
    { lat: 14.076304, lng: 100.596016 },
    { lat: 14.076684, lng: 100.595399 },
    { lat: 14.077282, lng: 100.594991 },
    { lat: 14.077540, lng: 100.594725 },
    { lat: 14.077935, lng: 100.594779 },
    { lat: 14.077685, lng: 100.595138 },
    { lat: 14.077196, lng: 100.595156 },
    { lat: 14.076702, lng: 100.595505 },
    { lat: 14.076467, lng: 100.596095 },
    { lat: 14.076382, lng: 100.597268 },
    { lat: 14.07623, lng: 100.599129 },
    { lat: 14.076179, lng: 100.600252 },
    { lat: 14.076094, lng: 100.601614 },
    { lat: 14.075323, lng: 100.601659 },
    { lat: 14.074451, lng: 100.601689 },
    { lat: 14.073169, lng: 100.601684 },
    { lat: 14.072081, lng: 100.601665 },
    { lat: 14.072084, lng: 100.602141 },
    { lat: 14.072121, lng: 100.604205 },
    { lat: 14.072127, lng: 100.605228 },
    { lat: 14.072129, lng: 100.606256 },
    { lat: 14.072153, lng: 100.608225 },
    { lat: 14.072174, lng: 100.611996 },
    { lat: 14.072196, lng: 100.613267 },
    { lat: 14.072195, lng: 100.616141 },
    { lat: 14.073275, lng: 100.616171 },
    { lat: 14.073442, lng: 100.615752 },
    { lat: 14.074046, lng: 100.615747 },
    { lat: 14.074127, lng: 100.616216 },
    { lat: 14.069164, lng: 100.616192 },
    { lat: 14.066796, lng: 100.616122 },
    { lat: 14.066765, lng: 100.613017 }]

const yellowLine = [
    { lat: 14.066765, lng: 100.613017 },
    { lat: 14.066902, lng: 100.609900 },
    { lat: 14.067399, lng: 100.609919 },
    { lat: 14.067387, lng: 100.609234 },
    { lat: 14.067378, lng: 100.608184 },
    { lat: 14.06739, lng: 100.606774 },
    { lat: 14.067439, lng: 100.605862 },
    { lat: 14.067455, lng: 100.604618 },
    { lat: 14.067439, lng: 100.603337 },
    { lat: 14.067501, lng: 100.601631 },
    { lat: 14.069619, lng: 100.601608 },
    { lat: 14.070462, lng: 100.601619 },
    { lat: 14.070439, lng: 100.601302 },
    { lat: 14.070491, lng: 100.598631 },
    { lat: 14.07113, lng: 100.598615 },
    { lat: 14.0712035, lng: 100.5979247 },
    { lat: 14.071224, lng: 100.597338 },
    { lat: 14.071654, lng: 100.597259 },
    { lat: 14.072569, lng: 100.596892 },
    { lat: 14.074128, lng: 100.596646 },
    { lat: 14.074865, lng: 100.596635 },
    { lat: 14.075322, lng: 100.596626 },
    { lat: 14.076257, lng: 100.596628 },
    { lat: 14.076304, lng: 100.596016 },
    { lat: 14.076725, lng: 100.595324 },
    { lat: 14.077290, lng: 100.594991 },
    { lat: 14.077564, lng: 100.594721 },
    { lat: 14.077913, lng: 100.594785 },
    { lat: 14.077689, lng: 100.595128 },
    { lat: 14.077196, lng: 100.595156 },
    { lat: 14.076743, lng: 100.595473 },
    { lat: 14.076467, lng: 100.596095 },
    { lat: 14.076382, lng: 100.597268 },
    { lat: 14.07623, lng: 100.599129 },
    { lat: 14.076179, lng: 100.600252 },
    { lat: 14.076095, lng: 100.601640 },
    { lat: 14.075323, lng: 100.601659 },
    { lat: 14.074451, lng: 100.601689 },
    { lat: 14.073169, lng: 100.601684 },
    { lat: 14.071279, lng: 100.601677 },
    { lat: 14.070332, lng: 100.601666 },
    { lat: 14.070254, lng: 100.602574 },
    { lat: 14.070294, lng: 100.604246 },
    { lat: 14.069247, lng: 100.604278 },
    { lat: 14.069091, lng: 100.604283 },
    { lat: 14.069053, lng: 100.605308 },
    { lat: 14.067517, lng: 100.605380 },
    { lat: 14.067491, lng: 100.605863 },
    { lat: 14.067487, lng: 100.607385 },
    { lat: 14.067445, lng: 100.608166 },
    { lat: 14.067439, lng: 100.609196 },
    { lat: 14.067419, lng: 100.610140 },
    { lat: 14.066896, lng: 100.610137 },
    { lat: 14.066854, lng: 100.613003 }]

const redLine = [
    { lat: 14.066765, lng: 100.613017 },
    { lat: 14.066890, lng: 100.609916 },
    { lat: 14.067403, lng: 100.609916 },
    { lat: 14.067387, lng: 100.609234 },
    { lat: 14.067378, lng: 100.608184 },
    { lat: 14.06739, lng: 100.606774 },
    { lat: 14.067439, lng: 100.605862 },
    { lat: 14.067468, lng: 100.605368 },
    { lat: 14.06902, lng: 100.605296 },
    { lat: 14.069063, lng: 100.604275 },
    { lat: 14.069243, lng: 100.604203 },
    { lat: 14.070187, lng: 100.604222 },
    { lat: 14.070204, lng: 100.602663 },
    { lat: 14.070213, lng: 100.601636 },
    { lat: 14.071255, lng: 100.601596 },
    { lat: 14.07271, lng: 100.6016 },
    { lat: 14.074398, lng: 100.601591 },
    { lat: 14.075424, lng: 100.601576 },
    { lat: 14.075969, lng: 100.601602 },
    { lat: 14.075999, lng: 100.60071 },
    { lat: 14.076126, lng: 100.598776 },
    { lat: 14.076197, lng: 100.59746 },
    { lat: 14.076304, lng: 100.596016 },
    { lat: 14.076679, lng: 100.595408 },
    { lat: 14.077296, lng: 100.595000 },
    { lat: 14.077544, lng: 100.594720 },
    { lat: 14.077880, lng: 100.594720 },
    { lat: 14.077937, lng: 100.594905 },
    { lat: 14.077711, lng: 100.595117 },
    { lat: 14.077196, lng: 100.595156 },//asian game
    { lat: 14.076730, lng: 100.595467 },
    { lat: 14.076467, lng: 100.596095 },
    { lat: 14.076388, lng: 100.596665 },
    { lat: 14.075324, lng: 100.596694 },
    { lat: 14.074862, lng: 100.596721 },
    { lat: 14.074119, lng: 100.596718 },
    { lat: 14.073182, lng: 100.596729 },
    { lat: 14.07258, lng: 100.596953 },
    { lat: 14.071651, lng: 100.597324 },
    { lat: 14.071228, lng: 100.597349 },
    { lat: 14.071274, lng: 100.597892 },
    { lat: 14.071262, lng: 100.598631 },
    { lat: 14.071128, lng: 100.598651 },
    { lat: 14.070489, lng: 100.598685 },
    { lat: 14.070478, lng: 100.601343 },
    { lat: 14.070462, lng: 100.601630 },
    { lat: 14.069544, lng: 100.601788 },
    { lat: 14.067525, lng: 100.601678 },
    { lat: 14.067519, lng: 100.603108 },
    { lat: 14.067496, lng: 100.604861 },
    { lat: 14.067491, lng: 100.605863 },
    { lat: 14.067487, lng: 100.607385 },
    { lat: 14.067445, lng: 100.608166 },
    { lat: 14.067439, lng: 100.609196 },
    { lat: 14.067384, lng: 100.610100 },
    { lat: 14.066896, lng: 100.610134 },
    { lat: 14.066854, lng: 100.613003 }]

const purpleLine = [
    { lat: 14.066019, lng: 100.600525 },
    { lat: 14.065976, lng: 100.601266 },
    { lat: 14.065759, lng: 100.602834 },
    { lat: 14.065814, lng: 100.604507 },
    { lat: 14.066141, lng: 100.604546 },
    { lat: 14.066162, lng: 100.605050 },
    { lat: 14.066407, lng: 100.605039 },
    { lat: 14.067465, lng: 100.605034 },
    { lat: 14.067455, lng: 100.604618 },
    { lat: 14.067439, lng: 100.603337 },
    { lat: 14.067517, lng: 100.601671 },
    { lat: 14.069619, lng: 100.601608 },
    { lat: 14.071255, lng: 100.601596 },
    { lat: 14.07271, lng: 100.6016 },
    { lat: 14.074398, lng: 100.601591 },
    { lat: 14.075424, lng: 100.601576 },
    { lat: 14.075975, lng: 100.601591 },
    { lat: 14.075999, lng: 100.60071 },
    { lat: 14.076126, lng: 100.598776 },
    { lat: 14.076197, lng: 100.59746 },
    { lat: 14.076304, lng: 100.596016 },
    { lat: 14.076681, lng: 100.595402 },
    { lat: 14.077544, lng: 100.594720 },
    { lat: 14.077880, lng: 100.594720 },
    { lat: 14.077937, lng: 100.594905 },
    { lat: 14.077711, lng: 100.595117 },
    { lat: 14.077196, lng: 100.595156 },
    { lat: 14.076730, lng: 100.595467 },
    { lat: 14.076467, lng: 100.596095 },
    { lat: 14.076382, lng: 100.597268 },
    { lat: 14.07623, lng: 100.599129 },
    { lat: 14.076179, lng: 100.600252 },
    { lat: 14.076099, lng: 100.601637 },
    { lat: 14.075323, lng: 100.601659 },
    { lat: 14.074451, lng: 100.601689 },
    { lat: 14.073169, lng: 100.601684 },
    { lat: 14.071279, lng: 100.601677 },
    { lat: 14.069544, lng: 100.601788 },
    { lat: 14.067528, lng: 100.601675 },
    { lat: 14.067519, lng: 100.603108 },
    { lat: 14.067496, lng: 100.604861 },
    { lat: 14.067481, lng: 100.605173 },
    { lat: 14.066474, lng: 100.605194 },
    { lat: 14.066146, lng: 100.605158 },
    { lat: 14.066121, lng: 100.604554 },
    { lat: 14.065803, lng: 100.604524 },
    { lat: 14.065730, lng: 100.602818 },
    { lat: 14.065943, lng: 100.601278 },
    { lat: 14.066019, lng: 100.600525 }]

const blueLine = [
    { lat: 14.066765, lng: 100.613017 },
    { lat: 14.066897, lng: 100.609908 },
    { lat: 14.067412, lng: 100.609924 },
    { lat: 14.067387, lng: 100.609234 },
    { lat: 14.067378, lng: 100.608184 },
    { lat: 14.06739, lng: 100.606774 },
    { lat: 14.067439, lng: 100.605862 },
    { lat: 14.067477, lng: 100.605367 },
    { lat: 14.068970, lng: 100.605356 },
    { lat: 14.06902, lng: 100.605296 },
    { lat: 14.069082, lng: 100.604276 },
    { lat: 14.069243, lng: 100.604203 },
    { lat: 14.070300, lng: 100.604232 },
    { lat: 14.070312, lng: 100.604554 },
    { lat: 14.072110, lng: 100.604565 },
    { lat: 14.072127, lng: 100.605228 },
    { lat: 14.072129, lng: 100.606256 },
    { lat: 14.072153, lng: 100.608225 },
    { lat: 14.072174, lng: 100.611996 },
    { lat: 14.072196, lng: 100.613267 },
    { lat: 14.072201, lng: 100.616147 },
    { lat: 14.073257, lng: 100.616171 },
    { lat: 14.073275, lng: 100.615749 },
    { lat: 14.073442, lng: 100.615752 },
    { lat: 14.074058, lng: 100.615745 },
    { lat: 14.074134, lng: 100.616226 },
    { lat: 14.074134, lng: 100.616226 },
    { lat: 14.072167, lng: 100.616183 },
    { lat: 14.07214, lng: 100.613277 },
    { lat: 14.072104, lng: 100.611996 },
    { lat: 14.072086, lng: 100.608293 },
    { lat: 14.072081, lng: 100.606335 },
    { lat: 14.072055, lng: 100.605229 },
    { lat: 14.072071, lng: 100.604596 },
    { lat: 14.070198, lng: 100.604585 },
    { lat: 14.070187, lng: 100.604255 },
    { lat: 14.069247, lng: 100.604278 },
    { lat: 14.069102, lng: 100.604298 },
    { lat: 14.069053, lng: 100.605308 },
    { lat: 14.068959, lng: 100.605400 },
    { lat: 14.067502, lng: 100.605392 },
    { lat: 14.067491, lng: 100.605863 },
    { lat: 14.067487, lng: 100.607385 },
    { lat: 14.067445, lng: 100.608166 },
    { lat: 14.067439, lng: 100.609196 },
    { lat: 14.067391, lng: 100.610107 },
    { lat: 14.066902, lng: 100.610147 },
    { lat: 14.066854, lng: 100.613003 }]

const CreateRoutePolyline = ({ coordinates, color }) => {
  const [optimizedWaypoints, setOptimizedWaypoints] = useState([]);
  const [polyWaypoints, setPolyWaypoints] = useState([]);
  const [currentColor, setCurrentColor] = useState(null);
  const [previousPolyline, setPreviousPolyline] = useState(null);
  const polylineRef = useRef();

  useEffect(() => {
    async function createOptimalWaypoints(coords) {
      const arr = [];

      coords.forEach((coord) => {
        arr.push({ lat: coord.value.lat, lng: coord.value.lng });
      });

      setOptimizedWaypoints(arr);
    }

    async function createPolyWaypoints(color) {
      switch (color) {
        case 'green':
          setPolyWaypoints(greenLine);
          break;
        case 'yellow':
          setPolyWaypoints(yellowLine);
          break;
        case 'red':
          setPolyWaypoints(redLine);
          break;
        case 'purple':
          setPolyWaypoints(purpleLine);
          break;
        case 'blue':
          setPolyWaypoints(blueLine);
          break;
        default:
          break;
      }
    }

    if (color !== currentColor) {
      setPolyWaypoints([]);
      setCurrentColor(color);
      createPolyWaypoints(color);
    }

    createOptimalWaypoints(coordinates);
  }, [coordinates, color, currentColor]);

  const onPolylineLoad = (polyline) => {
    if (previousPolyline) {
      previousPolyline.setMap(null);
    }
    setPreviousPolyline(polyline);
    polylineRef.current = polyline;
  };

  return polyWaypoints.length > 0 && optimizedWaypoints.length > 0 ? (
    <div>
      {<Polyline onLoad={onPolylineLoad} key={color} path={polyWaypoints} />}
    </div>
  ) : null;
};

export default CreateRoutePolyline;
