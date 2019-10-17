import React, { useState, useEffect } from 'react';
import { ContentData } from '../_data/Data';
import { ContentMapping } from '../../components/ContentMapping/ContentMapping';
import equal from 'deep-equal';
import './ContentView.css';
import { SideBar } from '../ContentWidgets/SideBar/SideBar';


export type ContentViewProps = {
	contentData: ContentData,
	pageTitle: string
}

/**
 * ContentView shows the content from the data provided. It renders widgets.
 * 
 * Last Modified
 * July 19, 2019
 * William Kwok 
 */
export const ContentView: React.FC<ContentViewProps> = ({ contentData, pageTitle }) => {
    const [content, setContent] = useState<ContentData>({ ...contentData } as ContentData);

    useEffect(() => {
        if (!equal(content, contentData)) {
            setContent({ ...contentData } as ContentData)
        }
    }, [contentData]);

	let pageString = pageTitle === "" ? "MAIN_PAGE_DO_NOT_EDIT" :
		pageTitle.substring(1, pageTitle.length);

	if (!contentData || !contentData[pageString]) {
		return <></>
	}

    const checkBanner = () => {
        if (contentData[pageString].contentOrder &&
            contentData[pageString].content && 
            contentData[pageString].content![contentData[pageString].contentOrder![0]]!.type === "BANNER") {
            let firstID = contentData[pageString].contentOrder![0]
            let content = contentData[pageString].content![firstID];
            let ContentWidget = ContentMapping[content!.type].widget;
            return <ContentWidget {...content} />
        } else {
            return ""
        }
    }

    return <>
        {checkBanner()}
        <div className={contentData[pageString].hasSidebar ? "sidebar-content-view" : ""}>
            {
            contentData[pageString].hasSidebar ? 
                <SideBar contentData={contentData} pageTitle={pageString} /> : null
            }
            
            <div id="content-view-container" className={contentData[pageString].hasSidebar ? "content-view-container-w-sidebar" : ""}>
                {contentData[pageString].contentOrder &&
                    contentData[pageString].content &&
                    contentData[pageString].contentOrder!.map((contentHash, index) => {
                        let content = contentData[pageString].content![contentHash];
                        let ContentWidget = ContentMapping[content!.type].widget;

                        return content!.type == "BANNER" ? null : <div id={contentHash} key={contentHash}>
                            <ContentWidget {...content} />
                        </div>
                    })
                }
            </div>
        </div>
    </>
}