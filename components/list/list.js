import React, { useState, useEffect } from "react";
import ImageEllipseProfileList from "./image_ellipse_profile_list";
import ElementsGroupingProfileList from "./elements_grouping_profile_list";
import ButtonDetails from "./button_details";
import {
    getAllProfiles
  } from "../../pages/api/profiles";

const List = () => {
    const [profiles, setProfiles] = useState([]),
        getAllProfilesData = async () => {
            var aux = await getAllProfiles();
            for (var i = 0; i < aux['data'].length; i++) {
                aux['data'][i].key = Math.random();
            }
            setProfiles(aux['data']);
        };

        useEffect(() => {
            getAllProfilesData();
        }, []);
    return (
        <div className="profileslist__list">
            {profiles.map((item) => {
                return (
                    <div key={item.id} className="profileslist__card">
                        <div>
                            <ImageEllipseProfileList profile={item} />
                            <ElementsGroupingProfileList name={item.first_name + ' ' + item.last_name} description={item.textStatus} />
                        </div>
                        <ButtonDetails profile={item}/>
                    </div>
                )
            })}
        </div>
    );
};

export default List;