(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/app/menu/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$item$2f$MenuItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/item/MenuItem.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$MenuAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/MenuAPI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Menu() {
    _s();
    const [menuList, setMenuList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            setMenuList((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$MenuAPI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMenuList"])()); //@/lib/MenuAPI에 함수를 호출
        }
    }["Menu.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "메뉴 페이지 입니다"
            }, void 0, false, {
                fileName: "[project]/src/app/menu/page.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: menuList.map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$item$2f$MenuItem$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        menu: menu
                    }, menu.menuCode, false, {
                        fileName: "[project]/src/app/menu/page.js",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/menu/page.js",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/menu/page.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Menu, "Iqig5vTaWdCmNlwO7o+GJ2jjKcw=");
_c = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/menu-detail.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "menuCode": 1,
        "menuName": "열무김치라떼",
        "menuPrice": 4500,
        "categoryName": "쥬스",
        "isOrderable": true,
        "detail": {
            "description": "갓 담근 열무김치를 착즙한 순도 100% 열무김치와 대관령 목장에서 방금 짜낸 싱싱한 우유의 조합",
            "image": "/images/1.PNG"
        }
    },
    {
        "menuCode": 2,
        "menuName": "우럭스무디",
        "menuPrice": 5000,
        "categoryName": "쥬스",
        "isOrderable": true,
        "detail": {
            "description": "태안 바다에서 갓 잡아올린 싱싱한 우럭을 이용한 상큼한 스무디",
            "image": "/images/2.PNG"
        }
    },
    {
        "menuCode": 3,
        "menuName": "생갈치쉐이크",
        "menuPrice": 6000,
        "categoryName": "쥬스",
        "isOrderable": true,
        "detail": {
            "description": "목포 밤바다를 누비는 생갈치를 이용한 고단백 쉐이크 음료",
            "image": "/images/3.PNG"
        }
    },
    {
        "menuCode": 4,
        "menuName": "갈릭미역파르페",
        "menuPrice": 7000,
        "categoryName": "기타",
        "isOrderable": true,
        "detail": {
            "description": "향균작용이 뛰어난 생마늘과 혈행개선에 도움을 주는 미역을 이용한 건강한 디저트 파르페",
            "image": "/images/4.PNG"
        }
    },
    {
        "menuCode": 5,
        "menuName": "앙버터김치찜",
        "menuPrice": 13000,
        "categoryName": "한식",
        "isOrderable": true,
        "detail": {
            "description": "남녀노소 불문 좋아하는 앙버터를 이용한 전통 방식의 김치찜",
            "image": "/images/5.PNG"
        }
    },
    {
        "menuCode": 6,
        "menuName": "생마늘샐러드",
        "menuPrice": 12000,
        "categoryName": "한식",
        "isOrderable": true,
        "detail": {
            "description": "흡혈귀에게 물리지 않기 위해 하루 한 끼는 꼭 먹어야 할 생마늘 샐러드",
            "image": "/images/6.PNG"
        }
    },
    {
        "menuCode": 7,
        "menuName": "민트미역국",
        "menuPrice": 15000,
        "categoryName": "한식",
        "isOrderable": true,
        "detail": {
            "description": "미역국의 텁텁한 맛을 상쾌한 민트를 이용해 밸런스를 맞춘 신개념 미역국",
            "image": "/images/7.PNG"
        }
    },
    {
        "menuCode": 8,
        "menuName": "한우딸기국밥",
        "menuPrice": 20000,
        "categoryName": "한식",
        "isOrderable": true,
        "detail": {
            "description": "한우 국밥의 구수함과 제철 딸기의 오묘한 조합으로 이끌어낸 최고의 한 끼 메뉴",
            "image": "/images/8.PNG"
        }
    },
    {
        "menuCode": 9,
        "menuName": "홍어마카롱",
        "menuPrice": 9000,
        "categoryName": "서양",
        "isOrderable": true,
        "detail": {
            "description": "매니아라면 자다가도 벌떡 일어나는 홍어를 이용한 마카롱 삼합",
            "image": "/images/9.PNG"
        }
    },
    {
        "menuCode": 10,
        "menuName": "코다리마늘빵",
        "menuPrice": 7000,
        "categoryName": "동양",
        "isOrderable": true,
        "detail": {
            "description": "마늘빵의 알싸한 향을 코다리의 담백함으로 채운 한 끼 식사로도 충분한 영양 만점 디저트",
            "image": "/images/10.PNG"
        }
    },
    {
        "menuCode": 11,
        "menuName": "정어리빙수",
        "menuPrice": 10000,
        "categoryName": "기타",
        "isOrderable": true,
        "detail": {
            "description": "뼈 째 넣은 정어리의 칼슘이 더해진 성장기 어린이들이 좋아하는 정어리 빙수",
            "image": "/images/11.PNG"
        }
    },
    {
        "menuCode": 12,
        "menuName": "날치알스크류바",
        "menuPrice": 2000,
        "categoryName": "기타",
        "isOrderable": true,
        "detail": {
            "description": "톡톡 튀는 식감을 가지고 베베 꼬아 만든 스크류 바",
            "image": "/images/12.PNG"
        }
    },
    {
        "menuCode": 13,
        "menuName": "직화구이젤라또",
        "menuPrice": 8000,
        "categoryName": "기타",
        "isOrderable": true,
        "detail": {
            "description": "젤라또는 차갑게 먹는다는 편견을 깬 800도씨 화덕에 직접 구운 직화구이 젤라또",
            "image": "/images/13.PNG"
        }
    },
    {
        "menuCode": 14,
        "menuName": "과메기커틀릿",
        "menuPrice": 13000,
        "categoryName": "일식",
        "isOrderable": true,
        "detail": {
            "description": "포항의 유명한 과메기를 남녀노소 누구나 먹을 수 있도록 신선한 기름에 튀겨낸 커틀릿",
            "image": "/images/14.PNG"
        }
    },
    {
        "menuCode": 15,
        "menuName": "죽방멸치튀김우동",
        "menuPrice": 11000,
        "categoryName": "일식",
        "isOrderable": true,
        "detail": {
            "description": "죽방멸치 튀김과 일본 큐슈의 전통 우동 육수 비법을 조합한 죽방멸치 튀김우동",
            "image": "/images/15.PNG"
        }
    },
    {
        "menuCode": 16,
        "menuName": "흑마늘아메리카노",
        "menuPrice": 9000,
        "categoryName": "커피",
        "isOrderable": true,
        "detail": {
            "description": "국내산 흑마늘 100%를 로스팅하여 핫브루 방식으로 추출한 아메리카노",
            "image": "/images/16.PNG"
        }
    },
    {
        "menuCode": 17,
        "menuName": "아이스가리비관자육수",
        "menuPrice": 6000,
        "categoryName": "쥬스",
        "isOrderable": true,
        "detail": {
            "description": "가리비 관자의 깊은 맛을 잘 살린 한 여름 인기 메뉴 아이스 가리비 관자 육수",
            "image": "/images/17.PNG"
        }
    },
    {
        "menuCode": 18,
        "menuName": "붕어빵초밥",
        "menuPrice": 35000,
        "categoryName": "일식",
        "isOrderable": true,
        "detail": {
            "description": "초밥 어디까지 먹어봤니? 밥도 먹고 빵도 먹고 일석이조 붕어빵초밥",
            "image": "/images/18.PNG"
        }
    },
    {
        "menuCode": 19,
        "menuName": "까나리코코넛쥬스",
        "menuPrice": 9000,
        "categoryName": "쥬스",
        "isOrderable": true,
        "detail": {
            "description": "코코넛 쥬스에 까나리 액젓을 첨가하여 깊은 맛을 표현해 낸 대표 음료",
            "image": "/images/19.PNG"
        }
    },
    {
        "menuCode": 20,
        "menuName": "마라깐쇼한라봉",
        "menuPrice": 22000,
        "categoryName": "쥬스",
        "isOrderable": true,
        "detail": {
            "description": "마라 매니아층을 겨냥한 한라봉 쥬스",
            "image": "/images/20.PNG"
        }
    },
    {
        "menuCode": 21,
        "menuName": "돌미나리백설기",
        "menuPrice": 5000,
        "categoryName": "한식",
        "isOrderable": true,
        "detail": {
            "description": "거름이 풍성한 미나리깡에서 수확한 국내산 돌미나리를 이용한 백설기",
            "image": "/images/21.PNG"
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/item/MenuItem.jsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/src/item/MenuItem.jsx'\n\nExpected ',', got 'ident'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/lib/MenuAPI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMenuList",
    ()=>getMenuList,
    "getMenubyMenuCode",
    ()=>getMenubyMenuCode
]);
// @/는 src/ 폴더
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2d$detail$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/menu-detail.json.[json].cjs [app-client] (ecmascript)");
;
function getMenuList() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2d$detail$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}
function getMenubyMenuCode(menuCode) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$menu$2d$detail$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find((menu)=>menu.menuCode === Number(menuCode));
// menuCode가 URL에서 가져온 값이면 보통 문자열(string)이라 바꿔줌
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_06ugc4_._.js.map