require("./main.css");
var $9Qftm$reactjsxruntime = require("react/jsx-runtime");
var $9Qftm$react = require("react");
var $9Qftm$azurestorageblob = require("@azure/storage-blob");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "studio_form", () => $80917194e138a996$export$2e2bcd8739ae039);




var $3d09fde6218e3819$exports = {};
$3d09fde6218e3819$exports = new URL("add.176d960a.svg", "file:" + __filename).toString();


var $715126ce9d4f6784$exports = {};
$715126ce9d4f6784$exports = new URL("next.26939253.svg", "file:" + __filename).toString();


var $bf854024d32d8b66$exports = {};
$bf854024d32d8b66$exports = new URL("alert.a62aa73d.svg", "file:" + __filename).toString();


var $020f3a6eab4be096$exports = {};
$020f3a6eab4be096$exports = new URL("share.105233d5.svg", "file:" + __filename).toString();


var $7ca42cd80b11e218$exports = {};
$7ca42cd80b11e218$exports = new URL("submit.dd6cba59.svg", "file:" + __filename).toString();


var $a170dc565ee7569e$exports = {};
$a170dc565ee7569e$exports = new URL("upload.bee3ffeb.svg", "file:" + __filename).toString();


var $59dd1f54d412cd2e$exports = {};
$59dd1f54d412cd2e$exports = new URL("loader.2d17ff68.svg", "file:" + __filename).toString();


var $572435607f9d72f0$export$2e2bcd8739ae039 = {
    next_icon: (/*@__PURE__*/$parcel$interopDefault($715126ce9d4f6784$exports)),
    submit_icon: (/*@__PURE__*/$parcel$interopDefault($7ca42cd80b11e218$exports)),
    upload_icon: (/*@__PURE__*/$parcel$interopDefault($a170dc565ee7569e$exports)),
    loader_icon: (/*@__PURE__*/$parcel$interopDefault($59dd1f54d412cd2e$exports))
};




// THIS IS SAMPLE CODE ONLY - DON'T STORE TOKEN IN PRODUCTION CODE
const $81e4bfd4bc51721e$var$sasToken = "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-12-31T01:12:49Z&st=2022-02-26T17:12:49Z&spr=https&sig=w9sOL4UG87uP38nnz3qmnwWIBEiTjwvesTQEcmgMsV0%3D";
const $81e4bfd4bc51721e$var$storageAccountName = "sauveurstore"; // Fill string with your Storage resource name
const $81e4bfd4bc51721e$var$containerName = 'datas';
const $81e4bfd4bc51721e$export$2ffa2ffbdd1f9d3f = ()=>{
    return !$81e4bfd4bc51721e$var$storageAccountName || !$81e4bfd4bc51721e$var$sasToken ? false : true;
};
// </snippet_isStorageConfigured>
// <snippet_getBlobsInContainer>
// return list of blobs in container to display
const $81e4bfd4bc51721e$var$getBlobsInContainer = async (containerClient)=>{
    const returnedBlobUrls = [];
    // get list of blobs in container
    // eslint-disable-next-line
    for await (const blob of containerClient.listBlobsFlat())// if image is public, just construct URL
    returnedBlobUrls.push(`https://${$81e4bfd4bc51721e$var$storageAccountName}.blob.core.windows.net/${$81e4bfd4bc51721e$var$containerName}/${blob.name}`);
    return returnedBlobUrls;
};
// </snippet_getBlobsInContainer>
// <snippet_createBlobInContainer>
const $81e4bfd4bc51721e$var$createBlobInContainer = async (containerClient, file, name)=>{
    try {
        // create blobClient for container
        const blobClient = containerClient.getBlockBlobClient(name);
        // set mimetype as determined from browser with file upload control
        const options = {
            blobHTTPHeaders: {
                blobContentType: file.type
            }
        };
        // upload file
        await blobClient.uploadBrowserData(file, options);
        return true;
    } catch  {
        return false;
    }
};
// </snippet_createBlobInContainer>
// <snippet_uploadFileToBlob>
const $81e4bfd4bc51721e$var$uploadFileToBlob = async (file, name)=>{
    if (!file) return [];
    // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
    const blobService = new $9Qftm$azurestorageblob.BlobServiceClient(`https://${$81e4bfd4bc51721e$var$storageAccountName}.blob.core.windows.net/?${$81e4bfd4bc51721e$var$sasToken}`);
    // get Container - full public read access
    const containerClient = blobService.getContainerClient($81e4bfd4bc51721e$var$containerName);
    // await containerClient.createIfNotExists({
    //   access: 'container',
    // });
    // upload file
    let result = await $81e4bfd4bc51721e$var$createBlobInContainer(containerClient, file, name);
    // get list of blobs in container
    return result;
};
var // </snippet_uploadFileToBlob>
$81e4bfd4bc51721e$export$2e2bcd8739ae039 = $81e4bfd4bc51721e$var$uploadFileToBlob;


const $d4e0b036529d0151$var$Upload = ({ handleEvent: handleEvent , values: values , custom: custom , config: config  })=>{
    const [isUploading, setUploading] = $9Qftm$react.useState(false);
    $9Qftm$react.useEffect(()=>{
        custom(true);
    });
    const setValue = async (files)=>{
        const reader = new FileReader();
        try {
            let file = files[0];
            //     console.log('file rawk',file)
            let ext = file.name.split(".")[1];
            let fileName = `${config.name}-${file.lastModified}-${new Date().toISOString()}.${ext}`;
            let result = await $81e4bfd4bc51721e$export$2e2bcd8739ae039(file, fileName);
            setUploading(true);
            console.log("file upload ", result);
            handleEvent({
                [config.name]: fileName
            });
        } catch (err) {
            handleEvent({
                [config.name]: 'url to blob'
            });
            console.log('file has been deployed into a black hole');
        }
    // reader.onload = async function(frEvent) {
    //
    //     let file = frEvent.target.result;
    //
    //     let ext = frEvent.name.split(".")[1];
    //     console.log('file',file)
    //
    //     let result = await uploadFileToBlob(file, `${config.name}-${new Date.now()}.${ext}`);
    //     console.log("file upload ", result)
    //
    // }
    //      let file = files[0];
    // //     console.log('file rawk',file)
    //      let ext = file.name.split(".")[1];
    //      let result = await uploadFileToBlob(file, `${config.name}-${file.lastModified}.${ext}`);
    //      console.log("file upload ", result)
    //will update to support multiple files in the near future
    // reader.readAsDataURL(files[0]);
    };
    //
    // const fileUpload = async (e) => {
    //     let file = e.target.files[0];
    //     let ext = file.name.split(".")[1];
    //     let result = await uploadFileToBlob(file, `${config.name}-${new Date.now()}.${ext}`);
    //     console.log("file upload ", result)
    //
    // }
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs($9Qftm$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                className: 'mb-2 font-bold text-xl text-blue-500',
                children: config.title
            }),
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("div", {
                className: 'flex flex-col p-2 h-1/2 w-full relative justify-center items-center',
                children: [
                    /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("img", {
                        className: 'w-12 h-12',
                        src: $572435607f9d72f0$export$2e2bcd8739ae039.upload_icon.src
                    }),
                    isUploading ? 'uploading' : `Press here to upload ${values.placeholder}`,
                    /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("input", {
                        className: 'w-full h-full input-style bg-transparent appearance-none outline-none opacity-0 absolute',
                        type: 'file',
                        onChange: (e)=>setValue(e.target.files)
                        ,
                        accept: values.support
                    }, config.name)
                ]
            })
        ]
    }));
};
var $d4e0b036529d0151$export$2e2bcd8739ae039 = $d4e0b036529d0151$var$Upload;



// Todo turn into a react hook to handle the changes
let $a80159aa17c1c30b$var$placeholder = "";
let $a80159aa17c1c30b$var$type = "";
//create a global handler for components
const $a80159aa17c1c30b$var$Options = ({ values: values , handleEvent: handleEvent , custom: custom , config: config  })=>{
    $9Qftm$react.useEffect(()=>{
        custom(true);
    });
    const setValue = (val)=>{
        $a80159aa17c1c30b$var$placeholder = val.placeholder;
        $a80159aa17c1c30b$var$type = val.type;
        handleEvent({
            [config.name]: val.value
        });
    };
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("div", {
        className: 'flex w-full h-auto flex-col',
        children: [
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                className: 'mb-2 font-bold text-xl text-blue-500',
                children: config.title
            }),
            values.map((i, k)=>{
                return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                    className: `${i.icon ? 'w-16 h-16' : 'w-auto p-2'} flex items-center justify-center bg-white rounded text-black cursor-pointer z-10 m-2`,
                    onClick: (e)=>setValue(i)
                    ,
                    children: i.icon ? /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("img", {
                        id: i.value,
                        name: i.value,
                        className: 'w-8 h-8',
                        src: i.icon
                    }) : /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("p", {
                        children: i.value
                    })
                }, k));
            })
        ]
    }));
};
const $a80159aa17c1c30b$var$Input = ({ handleEvent: handleEvent , values: values , custom: custom , support: support , config: config , setError: setError , error: error , defaultValue: defaultValue = true  })=>{
    $9Qftm$react.useEffect(()=>{
        custom(false);
        if (defaultValue) handleEvent({
            [config.name]: ''
        });
    }, []);
    //turn into global function
    const setValue = async (val)=>{
        try {
            if (config.valid) {
                if (await config.valid(val)) {
                    setError(false);
                    handleEvent({
                        [config.name]: val
                    });
                } else setError(true);
            } else handleEvent({
                [config.name]: val
            });
        } catch (e) {
            console.error(e);
        }
    };
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("div", {
        className: 'flex w-full h-auto flex-col',
        children: [
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                className: 'mb-2 font-bold text-xl text-blue-500',
                children: config.title
            }),
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                className: `w-full h-10 flex items-center p-2 border-l-2 ${error ? 'border-red-400' : ''} appearance-none`,
                children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("input", {
                    className: 'w-full h-12 input-style bg-transparent appearance-none outline-none',
                    type: values.type || $a80159aa17c1c30b$var$type,
                    placeholder: values.placeholder || $a80159aa17c1c30b$var$placeholder,
                    onChange: (e)=>setValue(e.target.value)
                    ,
                    accept: support,
                    autoFocus: "autofocus"
                }, config.name)
            }, values.placeholder)
        ]
    }));
};
const $a80159aa17c1c30b$var$Search = ({ handleEvent: handleEvent , values: values , custom: custom , config: config  })=>{
    const [searchResults, setResults] = $9Qftm$react.useState([]);
    $9Qftm$react.useEffect(()=>{
        custom(true);
    });
    const startSearch = (e)=>{
        try {
            const searchResult = values.data.filter((i)=>i.toLowerCase().includes(e[config.name].toLowerCase())
            );
            setResults(searchResult);
        } catch (err) {
            console.log('I am searching for some reason');
        }
    };
    const selectResult = (e)=>{
        let indexValue;
        values.data.map((i, k)=>{
            if (i == e) indexValue = k;
        });
        handleEvent({
            [config.name]: indexValue
        });
    };
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs($9Qftm$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx($a80159aa17c1c30b$var$Input, {
                values: values,
                handleEvent: startSearch,
                custom: custom,
                config: config,
                defaultValue: false
            }),
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                className: 'w-full flex flex-col overflow-hidden ',
                children: searchResults.map((i, k)=>{
                    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                        className: 'text-white p-2 border my-2',
                        onClick: ()=>selectResult(i)
                        ,
                        children: i
                    }, i));
                })
            })
        ]
    }));
};
const $a80159aa17c1c30b$var$Info = ({ handleEvent: handleEvent , values: values , custom: custom , config: config  })=>{
    $9Qftm$react.useEffect(()=>{
        custom(true);
    }, []);
    //turn into global function
    const setValue = ()=>{
        try {
            handleEvent({
                [config.name]: true
            });
        } catch (e) {
            console.error(e);
        }
    };
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
        className: 'flex flex-grow w-full h-auto flex-col justify-center items-center',
        children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("div", {
            className: 'flex flex-col',
            children: [
                /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                    className: 'my-2 font-bold text-2xl text-blue-500 ',
                    children: config.title
                }),
                /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                    className: 'w-full h-full flex flex-col max-w-sm',
                    children: values.map((val)=>{
                        return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("div", {
                            className: 'w-full flex flex-col max-w-xs my-2',
                            children: [
                                /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("h1", {
                                    className: 'font-bold text-xl',
                                    children: val.name
                                }),
                                /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("p", {
                                    className: 'text-lg font-italics',
                                    children: val.desc
                                })
                            ]
                        }, val.name));
                    })
                }),
                /*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("div", {
                    onClick: setValue,
                    className: 'p-2 bg-blue-500 rounded flex w-32 my-4',
                    children: [
                        /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                            className: 'flex w-2/3',
                            children: "Agree"
                        }),
                        /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                            className: 'flex w-1/3 justify-end',
                            children: "->"
                        })
                    ]
                })
            ]
        })
    }));
};
var $a80159aa17c1c30b$export$2e2bcd8739ae039 = {
    options: $a80159aa17c1c30b$var$Options,
    input: $a80159aa17c1c30b$var$Input,
    search: $a80159aa17c1c30b$var$Search,
    upload: $d4e0b036529d0151$export$2e2bcd8739ae039,
    info: $a80159aa17c1c30b$var$Info
};



const $fb5159eb403ad479$var$Loader = ()=>{
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer animate-spin`,
        children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("svg", {
            width: "48",
            height: "48",
            strokeWidth: "0.5",
            stroke: "#808080",
            fill: "none",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("rect", {
                        width: "24",
                        height: "24",
                        style: "stroke:rgba(0,0,0,0)"
                    }),
                    /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("path", {
                        d: "M12,2 L12,6 M12,18 L12,22 M4.93,4.93 L7.76,7.76 M16.24,16.24 L19.07,19.07 M2,12 L6,12 M18,12 L22,12 M4.93,19.07 L7.76,16.24 M16.24,7.76 L19.07,4.93",
                        stroke: "#808080"
                    })
                ]
            })
        })
    }));
};
var $fb5159eb403ad479$export$2e2bcd8739ae039 = $fb5159eb403ad479$var$Loader;



const $07fa992955b16e40$var$Next = ()=>{
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer`,
        children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            version: "1.1",
            style: "fill-rule:evenodd;clip-rule:evenodd;",
            children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("g", {
                children: [
                    /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("rect", {
                        x: "0",
                        y: "0",
                        width: "40",
                        height: "40",
                        style: "fill:none;stroke:black;stroke-opacity:0;stroke-width:1px;"
                    }),
                    /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("path", {
                        d: "M8.333,36.667L31.667,36.667C34.41,36.667 36.667,34.41 36.667,31.667L36.667,8.333C36.667,5.59 34.41,3.333 31.667,3.333L8.333,3.333C5.59,3.333 3.333,5.59 3.333,8.333L3.333,31.667C3.333,34.41 5.59,36.667 8.333,36.667ZM10.572,19.167L27.417,19.167L21.767,13.517L22.945,12.338L30.607,20L22.947,27.66L21.768,26.482L27.415,20.832L10.572,20.832L10.572,19.165L10.572,19.167Z",
                        style: "fill:white;stroke:white;stroke-width:1px;"
                    })
                ]
            })
        })
    }));
};
var $07fa992955b16e40$export$2e2bcd8739ae039 = $07fa992955b16e40$var$Next;



const $27c3f2a99059272f$var$Loader = ()=>{
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer animate-spin`,
        children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("svg", {
            width: "48",
            height: "48",
            strokeWidth: "0.5",
            stroke: "#808080",
            fill: "none",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("rect", {
                        width: "24",
                        height: "24",
                        style: "stroke:rgba(0,0,0,0)"
                    }),
                    /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("path", {
                        d: "M12,2 L12,6 M12,18 L12,22 M4.93,4.93 L7.76,7.76 M16.24,16.24 L19.07,19.07 M2,12 L6,12 M18,12 L22,12 M4.93,19.07 L7.76,16.24 M16.24,7.76 L19.07,4.93",
                        stroke: "#808080"
                    })
                ]
            })
        })
    }));
};
var $27c3f2a99059272f$export$2e2bcd8739ae039 = $27c3f2a99059272f$var$Loader;





const $80917194e138a996$var$handleEvent = (state, action)=>{
    try {
        let isPos = 0;
        let isAdd = true;
        state.map((i, k)=>{
            if (Object.keys(action)[0] == Object.keys(i)[0]) {
                isAdd = false;
                isPos = k;
            }
        });
        if (isAdd) state.push(action);
        else state[isPos] = action;
        return [
            ...state
        ];
    } catch (e) {
        console.error('unable to add form', e.message);
    }
};
const $80917194e138a996$var$Engine = ({ submitHandler: submitHandler , formConfig: formConfig , title: title  })=>{
    const [error, setError] = $9Qftm$react.useState(false);
    const [isCustom, setCustom] = $9Qftm$react.useState(true);
    // const [type] = useState(NativeService.getUriParams({param:'type'}))
    const [pos, setPos] = $9Qftm$react.useState(0);
    const [len] = $9Qftm$react.useState(formConfig.length);
    const [state, dispatch] = $9Qftm$react.useReducer($80917194e138a996$var$handleEvent, []);
    const [done, setDone] = $9Qftm$react.useState(false);
    let { [formConfig[pos].type]: Comp  } = $a80159aa17c1c30b$export$2e2bcd8739ae039;
    $9Qftm$react.useEffect(()=>{
        try {
            //to auto change
            if (state.length > pos && state.length < len && isCustom) setPos(pos + 1);
            else if (pos == len - 1 && isCustom) handleSubmit();
        } catch (e) {
            console.error('unable to change form', e);
        }
    }, [
        state
    ]);
    const handleSubmit = async ()=>{
        setDone(true);
        let _data = null;
        if (state.length > 0) {
            _data = {
            };
            state.map((x)=>{
                Object.entries(x).map(([key, value])=>{
                    _data[key] = value;
                });
            });
        }
        if (_data !== null) submitHandler(_data);
    // let _id = NativeService.getLocalStorage('id')
    // let store = await BackendService.Type[type].get(_id)
    // store.data.socials.push(_data)
    //
    // let isSaved = await BackendService.Type[type].save(_id,store)
    //
    // if(isSaved)
    //     // TODO show that it is loading
    // window.location = '/'
    };
    const nextSubmit = ()=>{
        setPos(pos + 1);
    };
    return(/*#__PURE__*/ $9Qftm$reactjsxruntime.jsxs("div", {
        className: `w-auto h-full flex flex-col p-8 bg-black text-white ${isCustom ? 'py-8' : 'py-48 lg:py-64'}`,
        children: [
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                className: 'w-full font-bold text-2xl my-4 text-white',
                children: title
            }),
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx(Comp, {
                values: formConfig[pos].values,
                handleEvent: dispatch,
                config: formConfig[pos],
                custom: setCustom,
                setError: setError,
                error: error
            }, `Comp${formConfig[pos].name}`),
            /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                className: `w-full text-white flex ${isCustom ? '' : 'flex-grow '}items-end justify-center`,
                children: error ? /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx($9Qftm$reactjsxruntime.Fragment, {
                }) : isCustom ? /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx($9Qftm$reactjsxruntime.Fragment, {
                }) : pos == len - 1 ? done ? /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx($fb5159eb403ad479$export$2e2bcd8739ae039, {
                }) : /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                    onClick: handleSubmit,
                    children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx($07fa992955b16e40$export$2e2bcd8739ae039, {
                    })
                }) : /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx("div", {
                    onClick: nextSubmit,
                    children: /*#__PURE__*/ $9Qftm$reactjsxruntime.jsx($27c3f2a99059272f$export$2e2bcd8739ae039, {
                    })
                })
            })
        ]
    }));
};
var $80917194e138a996$export$2e2bcd8739ae039 = $80917194e138a996$var$Engine;




//# sourceMappingURL=main.js.map
