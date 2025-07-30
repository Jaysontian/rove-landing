(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/magicui/animated-button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnimatedButton": ()=>AnimatedButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AnimatedButton(param) {
    let { children, hoverText, className = "", onClick } = param;
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: "\n        relative overflow-hidden bg-white text-black px-8 py-2 rounded-2xl font-semibold \n        transition-all duration-500 ease-out cursor-pointer\n        hover:bg-gray-200\n        ".concat(className, "\n      "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          absolute top-1/2 left-2 w-2 h-2 bg-black rounded-full\n          transition-all duration-500 ease-out\n          ".concat(isHovered ? 'scale-[200]' : 'scale-100', "\n        "),
                style: {
                    transform: isHovered ? 'scale(200)' : 'scale(1)'
                }
            }, void 0, false, {
                fileName: "[project]/components/magicui/animated-button.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "\n          relative z-10 transition-all duration-500 ease-out\n          ".concat(isHovered ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0', "\n        "),
                children: children
            }, void 0, false, {
                fileName: "[project]/components/magicui/animated-button.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "\n          absolute inset-0 flex items-center justify-center z-10\n          transition-all duration-500 ease-out\n          ".concat(isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4', "\n        "),
                children: hoverText
            }, void 0, false, {
                fileName: "[project]/components/magicui/animated-button.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/magicui/animated-button.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(AnimatedButton, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = AnimatedButton;
var _c;
__turbopack_context__.k.register(_c, "AnimatedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_magicui_animated-button_tsx_231dbb83._.js.map