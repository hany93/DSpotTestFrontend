import ElementsGrouping from "../element_grouping";
import ButtonDetails from "../button/button_details";
import Ellipse from "../ellipse";
import Image from "../image";

const ProfileList = ({ profiles }) => {
    return (
        <div className="profileslist__list">
            {profiles.map((item) => {
                return (
                    <div key={item.id} className="profileslist__card">
                        <div>
                            <div>
                                <Image photo={item.photo} />
                                <Ellipse class_ellipse={item.available ? "profileslist__ellipse" : "profileslist__ellipse_not_available"} />
                            </div>
                            <ElementsGrouping class_elementsgrouping='profileslist__elementsgrouping' name={item.first_name + ' ' + item.last_name} description={item.textStatus} />
                        </div>
                        <ButtonDetails profile={item} />
                    </div>
                )
            })}
        </div>
    );
};

export default ProfileList;