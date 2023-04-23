import { ButtonDelete, ButtonEdit } from "..";

export function TestimonialItemDashboard({ title, text, img, showModalWarn, setId, id, showModalModify, setPostModify, video, setModifyTestimony }) {
    return (
        <div className="max-w-sm shadow-xl bg-gray-100 border border-gray-300 overflow-hidden group transition-all duration-200">
            <a href="#">
                <img
                    className="group-hover:scale-110 transition-all duration-200"
                    src={img.secure_url}
                    alt=""
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-600">{text}</p>

                <div className='flex mt-4 justify-around'>

                    <ButtonEdit
                        showModalModify={showModalModify}
                        setPostModify={setPostModify}
                        id={id}
                        title={title}
                        // picture={img}
                        // video={video}
                        description={text}
                        setModifyTestimony={setModifyTestimony}
                    />
                    <ButtonDelete
                        showModalWarn={showModalWarn}
                        setId={setId}
                        id={id}
                    />
                </div>
            </div>
        </div>
    );
};
