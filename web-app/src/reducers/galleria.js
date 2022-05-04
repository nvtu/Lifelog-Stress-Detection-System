let initialState = {
    images: [
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
             ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
        ["nvtu/lifelog/b00000000_21i6x0_20220302_170552e.jpg", 
        "nvtu/lifelog/b00000001_21i6x0_20220302_170702e.jpg",
        "nvtu/lifelog/b00000002_21i6x0_20220302_170814e.jpg",
        "nvtu/lifelog/b00000003_21i6x0_20220302_170935e.jpg",
        "nvtu/lifelog/b00000004_21i6x0_20220302_171057e.jpg",
        ],
 
    ],
}


const galleriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IMAGE_LIST':
            return {
                ...state,
                images: action.imageList,
            }
        default:
            return state;
    }
}


export default galleriaReducer;
