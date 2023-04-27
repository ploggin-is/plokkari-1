"use client"
import OpenStreetMap from '../(OpenStreetMap)/OpenStreetMap'
import TopToolbar from '../(TopToolbar)/TopToolbar'

const MainPage = () => 
{
  return (
    <main>
      <TopToolbar></TopToolbar> 
      {/* <CleanButton changeCleanButton={ isPressed => setIsPressed(isPressed)} isPressed={isPressed}/> */}
      <div className="map-container" style={{position: 'relative'}}>
        <OpenStreetMap zoomLvl={13} />
        {/* <StartButton /> */}
      </div>
    </main>
  );
};
export default MainPage;