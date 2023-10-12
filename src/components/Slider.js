import React, { Component, useState } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./slider_components"; // example render components - source below

const sliderStyle = {
  position: "relative",
  width: "100%"
};

const domain = [0, 86400];
const defaultValues = [0, 86400];


const CustomSlider = () => {
  const [state, setState] = useState({
    values: defaultValues.slice(),
    update: defaultValues.slice()
  });

  const onChange = () => {

  }

  const onUpdate = () => {

  }

  
  return (
      <div className="w-full px-4">
        <div
          style={{
            marginBottom: "30px",
            marginLeft: "0",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
        </div>

        <Slider
          mode={2}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={onUpdate}
          onChange={onChange}
          values={state.values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
}


export default CustomSlider;