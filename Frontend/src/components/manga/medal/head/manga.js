import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'
const HeaderDashboard = ({ myWidth, myHeight }) => {
    const [dimensions, setDimensions] = useState({ width: myWidth, height: myHeight });

    const [statusClicked, setStatusClicked] = useState(true);
    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }))



    const handleClick = () => {
    }
    return (
        <div>
            <animated.div onClick={handleClick}
                style={{
                    width: 80,
                    height: 80,
                    background: '#ff6d6d',
                    borderRadius: 8,
                    ...springs,
                }}
            />
            {myWidth}
        </div>
    );
}
export default HeaderDashboard;