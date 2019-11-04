import React, { useState, useEffect } from 'react';
import Data, { ContentData } from './components/_data/Data';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { DebugHeader } from './components/_debug/DebugHeader/DebugHeader';
import { Footbar } from './components/Footbar/Footbar';
import { ContentEditorProps } from './components/ContentEditor/ContentEditor';
import { EnvironmentContext } from './contexts/EnvironmentContext/EnvironmentContext';
import { useWindowWidth } from './hooks/useWindowWidth';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';
import { CustomAppBar } from './components/CustomAppBar/CustomAppBar';
import { DebugFonts } from './components/_debug/DebugFonts';
import { ContentView } from './components/ContentView/ContentView';
import { NavigationBottom } from './components/NavigationBottom/NavigationBottom';
import "./App.css";
import { FONT_FAMILY } from './components/_data/Constants';
import { HardCodedMainPage } from './components/HardcodedMainPage/HardCodedMainPage';
import { Team } from './components/HardCodedTeamPage/LegacyHardCodedTeamPage';
import { Sponsors } from './components/HardCodedSponsorsPage/LegacyHardCodedSponsorsPage';
import { FIREBASE_DATABASE_REFERENCE } from '.';


// This line is to remove a bug that Firefox has
// TODO: insert link explaining why
window.addEventListener("unload", function () { });

type AppProps = {
	IEOREDGE: boolean,
	currYear: number,
	firebase?: any,
	ContentEditor: React.FC<ContentEditorProps> | null
}
const debugURL = "/Editor";

/**
 * App is the main application that handles all the route logic and rendering.
 * 
 * Last Modified
 * William Kwok
 * July 17, 2019
 */
const App: React.FC<AppProps> = ({ IEOREDGE, currYear, firebase, ContentEditor }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [contentData, setContentData] = useState<ContentData>(Data.getContentData());
	const [pageTitle, setPageTitle] = useState<string>(debugURL)
	const [debugMode, setDebugMode] = useState<boolean>(true);
	const windowWidth = useWindowWidth();

	let name = `https://${currYear}.igem.org/Team:Washington`;
	let imgsToPrefetch: string[] = Data.getImgsToPrefetch();
	let imgsLoaded = 0;

	const displayConstants = Data.getDisplayConstants();
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: displayConstants.primaryColor as string
			},
			secondary: {
				main: displayConstants.secondaryColor as string
			}
		},
		typography: {
			fontFamily: FONT_FAMILY
		}
	});

    /**
     * Upon component mount, this effect determines if it is currently on the live website or not.
     * It sets the `pageTitle` to be `debugURL` if not live, or the text after `"Team:Washington"`
     * in the URL.
     * 
     * eg "2019.igem.org/Team:Washington/Design" -> "/Design"
     */
	useEffect(() => {
        /**
         * Prefetch images will grab images to load in the background after the page has loaded
         */
		const prefetchImagesWaveTwo = () => {

		}

        /**
         * Prefetch images will grab images to load in the background after the page has loaded
         */
		const prefetchImages = () => {
			imgsToPrefetch.forEach((imgURL: string) => {
				const img = new Image();
				img.src = imgURL;
				img.onload = () => {
					imgsLoaded++;
					if (imgsLoaded === imgsToPrefetch.length) {
						prefetchImagesWaveTwo();
					}
				}
			})
		}
		prefetchImages();
		let splitTitle = window.location.href.split("igem");
		if (splitTitle.length === 2) {
			setPageTitle((splitTitle[1].split("Team:Washington")[1]).split("?")[0]);
			setDebugMode(false);
		} else {
			DebugFonts(); // Set fonts in body
		}
		setLoading(false);
		let dataRef: FIREBASE_DATABASE_REFERENCE | null = null;
		if (firebase) {
			dataRef = firebase.database().ref(`/${currYear}/ContentData`);
			if (dataRef) {
				dataRef.on("value", (snap: any) => {
					setContentData(snap.val() as ContentData);
				});
			}

			return () => {
				if (dataRef) {
					dataRef.off();
				}
			}
		} else {
			setContentData(Data.getContentData())
		}
	}, [pageTitle, imgsLoaded, imgsToPrefetch, currYear, firebase]);

    /**
     * Sets the loading state to true. This is used for in between pages. This function MUST be sent
     * down as a prop to ALL the pages, so the appropriate loading procedure takes place.
     * 
     * @example `From now on, we will pass it down like this`
     *   <CustomView a={this.displayLoadingMessage} />
     *   // in CustomView:
     *   render() {
     *       let a = this.props.a;
     *       return (
     *           <div>   
     *               <ChildView a={a} />
     *               <a href="_____" onClick={a} />
     *           </div>
     *       )
     *   }
     */
	const a = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}

	return <div className="App">
		<EnvironmentContext.Provider value={{ windowWidth, firebase }}>
			<MuiThemeProvider theme={theme}>
				{debugMode && <>
					<DebugHeader />
				</>}

				<CustomAppBar name={name} pageTitle={pageTitle} a={a} />

				{!loading && <>
					<div className={`${debugMode ? "app-content-dev" : "app-content-real"}
                        ${windowWidth < 600 ? "mobile" : ""}`}>
						{/** Comment out this in final build */}
						{pageTitle === "/Editor" && ContentEditor &&
							<ContentEditor
								contentData={contentData}
								currYear={currYear}
							/>}
						{/*********HARDCODED MAIN PAGE*********** */}
						{pageTitle !== "/Editor"
							&& pageTitle === "" &&
							<HardCodedMainPage a={a} />}
						{/*********HARCODED TEAM PAGE *********** */}
						{pageTitle !== "/Editor"
							&& pageTitle === "/Team"
							&& <Team data={Data.getTeamData()} />

						}
						{/** HARDCODED SPONSORS PAGE */}
						{pageTitle !== "/Editor"
							&& pageTitle === "/Sponsors"
							&& <Sponsors data={Data.getSponsorsData()} />

						}
						{/*********REGULAR CONTENT VIEW*************/}
						{pageTitle !== "/Editor" && pageTitle !== "" && pageTitle !== "/MAIN_PAGE" &&
							<ContentView contentData={contentData} pageTitle={pageTitle} />
						}
					</div>
					<NavigationBottom name={name} pageTitle={pageTitle} a={a} />
					<Footbar a={a} />
				</>}

				{loading &&
					<LoadingScreen />}
			</MuiThemeProvider>
		</EnvironmentContext.Provider>
	</div>
}


export default App;
