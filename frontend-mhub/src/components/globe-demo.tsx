// components/globe-demo.tsx
import Globe from 'react-globe.gl';
import { useEffect, useRef } from 'react';
import type { GlobeMethods } from 'react-globe.gl';
import React from 'react';

export function GlobeDemo() {
    const globeEl = useRef<GlobeMethods | null>(null);

    useEffect(() => {
        if (!globeEl.current) return;

        // Wait for the globe to initialize
        const timeout = setTimeout(() => {
            if (globeEl.current) {
                // Sample data - replace with your actual data
                const sampleData = [
                    { lat: 40.7128, lng: -74.0060, size: 0.1 }, // New York
                    { lat: 34.0522, lng: -118.2437, size: 0.15 }, // LA
                    { lat: 51.5074, lng: -0.1278, size: 0.1 }, // London
                    { lat: 35.6762, lng: 139.6503, size: 0.1 }, // Tokyo
                    { lat: -33.8688, lng: 151.2093, size: 0.1 }, // Sydney
                ];

                // @ts-ignore - pointsData is not properly typed in the library
                globeEl.current.pointsData(sampleData);

                // Auto-rotate
                globeEl.current.controls().autoRotate = true;
                globeEl.current.controls().autoRotateSpeed = 0.5;
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="w-full h-full">
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere={true}
                atmosphereColor="rgba(100, 149, 237, 0.2)"
                pointColor={() => 'rgba(59, 130, 246, 0.8)'}
                pointAltitude={0.01}
                pointRadius={0.25}
                pointsMerge={true}
                width={800}
                height={600}
            />
        </div>
    );
}