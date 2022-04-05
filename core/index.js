var $fUJwp$reactjsxruntime = require("react/jsx-runtime");
var $fUJwp$react = require("react");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $b3f4e283368079a4$export$2e2bcd8739ae039);



// import Upload from './components/form'
//does not work with nextjs and now parcel mxm
// import './index.css'
// Todo turn into a react hook to handle the changes
let $29beb6d86bb3b8f3$var$placeholder = "";
let $29beb6d86bb3b8f3$var$type = "";
//create a global handler for components
function $29beb6d86bb3b8f3$var$Options({ values: values , handleEvent: handleEvent , custom: custom , config: config  }) {
    $fUJwp$react.useEffect(()=>{
        custom(true);
    });
    const setValue = (val)=>{
        $29beb6d86bb3b8f3$var$placeholder = val.placeholder;
        $29beb6d86bb3b8f3$var$type = val.type;
        handleEvent({
            [config.name]: val.value
        });
    };
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
        className: 'flex w-full h-auto flex-col',
        children: [
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: 'mb-2 font-bold text-xl text-blue-500',
                children: config.title
            }),
            values.map((i, k)=>{
                return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    className: `${i.icon ? 'w-16 h-16' : 'w-auto p-2'} flex items-center justify-center bg-white rounded text-black cursor-pointer z-10 m-2`,
                    onClick: (e)=>setValue(i)
                    ,
                    children: i.icon ? /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("img", {
                        id: i.value,
                        name: i.value,
                        className: 'w-8 h-8',
                        src: i.icon
                    }) : /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("p", {
                        children: i.value
                    })
                }, k);
            })
        ]
    });
}
function $29beb6d86bb3b8f3$var$Input({ handleEvent: handleEvent , values: values , custom: custom , support: support , config: config , setError: setError , error: error , defaultValue: defaultValue = true  }) {
    $fUJwp$react.useEffect(()=>{
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
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
        className: 'flex w-full h-auto flex-col',
        children: [
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: 'mb-2 font-bold text-xl text-blue-500',
                children: config.title
            }),
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: `w-full h-10 flex items-center p-2 border-l-2 ${error ? 'border-red-400' : ''} appearance-none`,
                children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("input", {
                    className: 'w-full h-12 input-style bg-transparent appearance-none outline-none',
                    type: values.type || $29beb6d86bb3b8f3$var$type,
                    placeholder: values.placeholder || $29beb6d86bb3b8f3$var$placeholder,
                    onChange: (e)=>setValue(e.target.value)
                    ,
                    accept: support,
                    autoFocus: "autofocus"
                }, config.name)
            }, values.placeholder)
        ]
    });
}
function $29beb6d86bb3b8f3$var$Search({ handleEvent: handleEvent , values: values , custom: custom , config: config  }) {
    const [searchResults, setResults] = $fUJwp$react.useState([]);
    $fUJwp$react.useEffect(()=>{
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
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs($fUJwp$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($29beb6d86bb3b8f3$var$Input, {
                values: values,
                handleEvent: startSearch,
                custom: custom,
                config: config,
                defaultValue: false
            }),
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: 'w-full flex flex-col overflow-hidden ',
                children: searchResults.map((i, k)=>{
                    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                        className: 'text-white p-2 border my-2',
                        onClick: ()=>selectResult(i)
                        ,
                        children: i
                    }, i);
                })
            })
        ]
    });
}
function $29beb6d86bb3b8f3$var$Info({ handleEvent: handleEvent , values: values , custom: custom , config: config  }) {
    $fUJwp$react.useEffect(()=>{
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
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: 'flex flex-grow w-full h-auto flex-col justify-center items-center',
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
            className: 'flex flex-col',
            children: [
                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    className: 'my-2 font-bold text-2xl text-blue-500 ',
                    children: config.title
                }),
                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    className: 'w-full h-full flex flex-col max-w-sm',
                    children: values.map((val)=>{
                        return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
                            className: 'w-full flex flex-col max-w-xs my-2',
                            children: [
                                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("h1", {
                                    className: 'font-bold text-xl',
                                    children: val.name
                                }),
                                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("p", {
                                    className: 'text-lg font-italics',
                                    children: val.desc
                                })
                            ]
                        }, val.name);
                    })
                }),
                /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
                    onClick: setValue,
                    className: 'p-2 bg-blue-500 rounded flex w-32 my-4',
                    children: [
                        /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                            className: 'flex w-2/3',
                            children: "Agree"
                        }),
                        /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                            className: 'flex w-1/3 justify-end',
                            children: "->"
                        })
                    ]
                })
            ]
        })
    });
}
var $29beb6d86bb3b8f3$export$2e2bcd8739ae039 = {
    options: $29beb6d86bb3b8f3$var$Options,
    input: $29beb6d86bb3b8f3$var$Input,
    search: $29beb6d86bb3b8f3$var$Search,
    info: $29beb6d86bb3b8f3$var$Info
};



function $f8a50a8f6e7fe935$var$Loader() {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer `,
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("svg", {
            width: "48",
            height: "48",
            strokeWidth: "0.5",
            stroke: "#808080",
            fill: "none",
            strokeLinejoin: "round",
            strokeLinecap: "round",
            viewBox: "0 0 24 24",
            className: 'animate-spin',
            children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("rect", {
                        width: "24",
                        height: "24",
                        className: 'stroke-white stroke-0 '
                    }),
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("path", {
                        d: "M12,2 L12,6 M12,18 L12,22 M4.93,4.93 L7.76,7.76 M16.24,16.24 L19.07,19.07 M2,12 L6,12 M18,12 L22,12 M4.93,19.07 L7.76,16.24 M16.24,7.76 L19.07,4.93",
                        stroke: "#808080"
                    })
                ]
            })
        })
    });
}
var $f8a50a8f6e7fe935$export$2e2bcd8739ae039 = $f8a50a8f6e7fe935$var$Loader;



function $83122a2a64fedaa7$var$Submit() {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer`,
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("svg", {
            width: "40",
            height: "40",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("rect", {
                        width: "24",
                        height: "24",
                        className: 'stroke-white fill-transparent stroke-0'
                    }),
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("path", {
                        d: "M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM8.28 16.427l-.707-.706 7.146-7.147-4.793-.001v-1h6.5v6.5h-1V9.28L8.28 16.427z",
                        fill: "#FFF9F9"
                    })
                ]
            })
        })
    });
}
var $83122a2a64fedaa7$export$2e2bcd8739ae039 = $83122a2a64fedaa7$var$Submit;



function $4df179bf2fa8e473$var$Next() {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: `w-8 h-8 cursor-pointer`,
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("g", {
                children: [
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("rect", {
                        x: "0",
                        y: "0",
                        width: "40",
                        height: "40",
                        className: 'stroke-black fill-transparent stroke-1'
                    }),
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("path", {
                        d: "M8.333,36.667L31.667,36.667C34.41,36.667 36.667,34.41 36.667,31.667L36.667,8.333C36.667,5.59 34.41,3.333 31.667,3.333L8.333,3.333C5.59,3.333 3.333,5.59 3.333,8.333L3.333,31.667C3.333,34.41 5.59,36.667 8.333,36.667ZM10.572,19.167L27.417,19.167L21.767,13.517L22.945,12.338L30.607,20L22.947,27.66L21.768,26.482L27.415,20.832L10.572,20.832L10.572,19.165L10.572,19.167Z",
                        className: 'fill-white stroke-white stroke-1'
                    })
                ]
            })
        })
    });
}
var $4df179bf2fa8e473$export$2e2bcd8739ae039 = $4df179bf2fa8e473$var$Next;



function $bd7cd710d7391546$var$Upload() {
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
        className: `w-12 h-12 cursor-pointer`,
        children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("svg", {
            width: "40",
            height: "40",
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("rect", {
                        width: "24",
                        height: "24",
                        className: 'stroke-white stroke-0 '
                    }),
                    /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("path", {
                        d: "M17.714 10.095h-.482c-.124-2.647-2.317-4.762-4.994-4.762-2.172 0-4.157 1.382-4.862 3.334H7c-2.758 0-5 2.242-5 5 0 2.57 1.947 4.692 4.444 4.97l5.056.014v-5.443l-2.397 2.398a.5.5 0 0 1-.707 0 .5.5 0 0 1 0-.707l3.25-3.25c.105-.094.223-.147.355-.147a.5.5 0 0 1 .356.15l3.247 3.248a.5.5 0 0 1-.707.707L12.5 13.208v5.445l5.214.014c2.363 0 4.286-1.923 4.286-4.286s-1.923-4.286-4.286-4.286z",
                        fill: "#FFFFFF"
                    })
                ]
            })
        })
    });
}
var $bd7cd710d7391546$export$2e2bcd8739ae039 = $bd7cd710d7391546$var$Upload;





const $268e121945ca8a55$var$handleEvent = (state, action)=>{
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
function $268e121945ca8a55$var$Studio({ submitHandler: submitHandler , formConfig: formConfig , title: title  }) {
    //
    const [error, setError] = $fUJwp$react.useState(false);
    const [isCustom, setCustom] = $fUJwp$react.useState(true);
    const [pos, setPos] = $fUJwp$react.useState(0);
    const [len] = $fUJwp$react.useState(formConfig.length);
    const [state, dispatch] = $fUJwp$react.useReducer($268e121945ca8a55$var$handleEvent, []);
    const [done, setDone] = $fUJwp$react.useState(false);
    let { [formConfig[pos].type]: Comp  } = $29beb6d86bb3b8f3$export$2e2bcd8739ae039;
    $fUJwp$react.useEffect(()=>{
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
            _data = {};
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
    return /*#__PURE__*/ $fUJwp$reactjsxruntime.jsxs("div", {
        className: `w-auto h-full flex flex-col p-8 bg-black text-white ${isCustom ? 'py-8' : 'py-48 lg:py-64'}`,
        children: [
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: 'w-full font-bold text-2xl my-4 text-white',
                children: title
            }),
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx(Comp, {
                values: formConfig[pos].values,
                handleEvent: dispatch,
                config: formConfig[pos],
                custom: setCustom,
                setError: setError,
                error: error
            }, `Comp${formConfig[pos].name}`),
            /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                className: `w-full text-white flex ${isCustom ? '' : 'flex-grow '}items-end justify-center`,
                children: error ? /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($fUJwp$reactjsxruntime.Fragment, {}) : isCustom ? /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($fUJwp$reactjsxruntime.Fragment, {}) : pos == len - 1 ? done ? /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($f8a50a8f6e7fe935$export$2e2bcd8739ae039, {}) : /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    onClick: handleSubmit,
                    children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($83122a2a64fedaa7$export$2e2bcd8739ae039, {})
                }) : /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx("div", {
                    onClick: nextSubmit,
                    children: /*#__PURE__*/ $fUJwp$reactjsxruntime.jsx($4df179bf2fa8e473$export$2e2bcd8739ae039, {})
                })
            })
        ]
    });
}
var $268e121945ca8a55$export$2e2bcd8739ae039 = $268e121945ca8a55$var$Studio;


var $b3f4e283368079a4$export$2e2bcd8739ae039 = {
    Studio: $268e121945ca8a55$export$2e2bcd8739ae039
};


//# sourceMappingURL=index.js.map
