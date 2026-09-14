/* @ds-bundle: {"format":4,"namespace":"ODLDentalClinicDesignSystem_798d6f","components":[{"name":"TitleGlyph","sourcePath":"components/core/Badge.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ReviewCard","sourcePath":"components/core/ReviewCard.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"TreatmentCard","sourcePath":"components/core/TreatmentCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"FaqList","sourcePath":"components/sections/FaqList.jsx"},{"name":"ListCard","sourcePath":"components/sections/ListCard.jsx"},{"name":"OverlayCard","sourcePath":"components/sections/OverlayCard.jsx"},{"name":"PriceTile","sourcePath":"components/sections/PriceTile.jsx"},{"name":"StepCard","sourcePath":"components/sections/StepCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"c2a6c8c03d90","components/core/Button.jsx":"05b6e58dd5a7","components/core/Card.jsx":"aeb77a43ebc2","components/core/Icon.jsx":"bbc723766dd3","components/core/ReviewCard.jsx":"f4a3b4833ec0","components/core/StatBlock.jsx":"c7de0ac3d4f2","components/core/TreatmentCard.jsx":"81bdb39e43bd","components/forms/Input.jsx":"6f04790753ed","components/forms/Textarea.jsx":"69efb9ced66b","components/sections/FaqList.jsx":"8108e63a8f05","components/sections/ListCard.jsx":"8b7a9b3e5415","components/sections/OverlayCard.jsx":"46ba30d47acb","components/sections/PriceTile.jsx":"6046eaa74493","components/sections/StepCard.jsx":"c42b45c6f589","ui_kits/website/ContactFooter.jsx":"d225c6d74f77","ui_kits/website/Header.jsx":"371cf226df56","ui_kits/website/Hero.jsx":"c7f3b1081cf8","ui_kits/website/Practices.jsx":"9c4198080c90","ui_kits/website/Proof.jsx":"949da7abc0bd","ui_kits/website/Treatments.jsx":"ab60a5b47117"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ODLDentalClinicDesignSystem_798d6f = window.ODLDentalClinicDesignSystem_798d6f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — white, softly-rounded surface with ambient shadow (no colored borders).
 * Optional top media image, and hover-lift interaction.
 */
function Card({
  children,
  image,
  imageAlt = "",
  padding = "24px",
  hoverable = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      overflow: "hidden",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      if (!hoverable) return;
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      if (!hoverable) return;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 10",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/**
 * Icon — thin wrapper around Lucide line icons (the brand's icon style).
 * Requires the Lucide UMD script to be present on the page (loaded via CDN).
 * Renders an <i data-lucide> placeholder that Lucide replaces with an SVG.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  style,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    const lucide = typeof window !== "undefined" ? window.lucide : null;
    if (lucide && ref.current) {
      // Replace only within this element to avoid re-scanning the whole doc.
      ref.current.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      ref.current.appendChild(i);
      lucide.createIcons({
        icons: lucide.icons,
        attrs: {
          width: size,
          height: size,
          "stroke-width": strokeWidth,
          stroke: color
        },
        nameAttr: "data-lucide"
      });
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TITLE_GLYPH_PATHS = ["M1 15.4C10 15.4 10 4.59999 19 4.59999", "M1 4.59999C10 4.59999 10 15.4 19 15.4", "M1.90039 15.36L1.90039 4.63999", "M5.5 14.26L5.5 5.74001", "M18.0996 4.63999V15.36", "M14.5 5.80001V14.26"];

/**
 * TitleGlyph — ODL's own section-eyebrow mark (the "ic-title" glyph).
 * Inlined from assets/icons/ic-title.svg so it inherits currentColor.
 */
function TitleGlyph({
  size = 18,
  strokeWidth = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      display: "block",
      ...style
    }
  }, rest), TITLE_GLYPH_PATHS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

/**
 * Badge — ODL's section eyebrow label: the brand's own thin "ic-title" glyph
 * followed by a short label, sitting directly on the background. No pill, no
 * fill, no border. e.g. "How We Do", "Proven Excellence", "Before and After".
 */
function Badge({
  children,
  icon,
  size = "md",
  tone = "ink",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 13,
      iconSize: 16,
      gap: 8
    },
    md: {
      fontSize: 15,
      iconSize: 19,
      gap: 10
    },
    lg: {
      fontSize: 17,
      iconSize: 22,
      gap: 12
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    ink: "var(--text-heading)",
    brand: "var(--brand)",
    muted: "var(--text-muted)",
    light: "var(--odl-white)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "var(--ls-normal)",
      color: tones[tone] || tones.ink,
      ...style
    }
  }, rest), icon === null ? null : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.iconSize,
    strokeWidth: 1.5
  }) : /*#__PURE__*/React.createElement(TitleGlyph, {
    size: s.iconSize
  }), children);
}
Object.assign(__ds_scope, { TitleGlyph, Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — ODL's signature pill CTA.
 * The house pattern is a pill with a label and a filled cyan circular chip
 * holding an ↗ arrow on the right ("Book an Appointment ↗", "Price & Payment
 * Options ↗", "Our Services ↗"). Set chip={false} for a plain pill.
 */
function Button({
  children,
  variant = "dark",
  size = "md",
  chip,
  icon,
  disabled = false,
  fullWidth = false,
  type = "button",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: "6px 8px 6px 18px",
      gap: 12,
      chipSize: 26,
      iconSize: 12,
      plainPad: "9px 18px"
    },
    md: {
      fontSize: 15.5,
      padding: "7px 9px 7px 22px",
      gap: 16,
      chipSize: 32,
      iconSize: 14,
      plainPad: "12px 24px"
    },
    lg: {
      fontSize: 17,
      padding: "9px 11px 9px 28px",
      gap: 18,
      chipSize: 38,
      iconSize: 16,
      plainPad: "15px 30px"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    /* white pill, thin dark hairline border, dark label — the most common CTA */
    dark: {
      background: "var(--surface-page)",
      color: "var(--text-heading)",
      border: "1.5px solid var(--text-heading)",
      boxShadow: "none"
    },
    /* white pill, no border — sits on tinted panels and photos */
    light: {
      background: "var(--surface-page)",
      color: "var(--text-heading)",
      border: "1.5px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    /* cyan hairline + cyan label — secondary/tertiary actions */
    outline: {
      background: "var(--surface-page)",
      color: "var(--brand)",
      border: "1.5px solid var(--brand)",
      boxShadow: "none"
    },
    /* solid cyan — the nav's booking button */
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1.5px solid var(--brand)",
      boxShadow: "none"
    },
    /* solid navy — highest emphasis */
    cta: {
      background: "var(--cta)",
      color: "var(--text-on-brand)",
      border: "1.5px solid var(--cta)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-heading)",
      border: "1.5px solid transparent",
      boxShadow: "none"
    }
  };
  const showChip = chip !== undefined ? chip : variant === "dark" || variant === "light" || variant === "outline";
  const solid = variant === "primary" || variant === "cta";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : "auto",
      alignItems: "center",
      justifyContent: showChip && fullWidth ? "space-between" : "center",
      gap: showChip ? s.gap : 8,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: showChip ? s.padding : s.plainPad,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      whiteSpace: "nowrap",
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translateY(-1px)";
      e.currentTarget.style.filter = solid ? "brightness(0.94)" : "none";
      if (!solid) e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.filter = "none";
      e.currentTarget.style.boxShadow = variants[variant].boxShadow;
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.iconSize + 4,
    strokeWidth: 1.5
  }), children, showChip && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      width: s.chipSize,
      height: s.chipSize,
      borderRadius: "var(--radius-circle)",
      background: "var(--brand)",
      color: "var(--text-on-brand)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: s.iconSize,
    strokeWidth: 2,
    color: "var(--text-on-brand)"
  })), !showChip && solid && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: s.iconSize,
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ReviewCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GoogleG = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#4285F4",
  d: "M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#34A853",
  d: "M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#FBBC05",
  d: "M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA4335",
  d: "M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
}));
const Stars = ({
  rating = 5,
  size = 14
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    gap: 1
  }
}, [0, 1, 2, 3, 4].map(i => {
  const fill = rating >= i + 1 ? "#FBBC05" : rating > i ? "url(#half)" : "#e0e0e0";
  return /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "half"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#FBBC05"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#e0e0e0"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: fill,
    d: "M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 7.1-1.01z"
  }));
}));

/**
 * ReviewCard — floating Google-rating chip and testimonial quote card.
 * variant="chip": compact rating pill (as pinned to section edges on the site).
 * variant="quote": patient testimonial with quote, name and rating.
 */
function ReviewCard({
  variant = "chip",
  rating = 4.9,
  count,
  quote,
  name,
  style,
  ...rest
}) {
  if (variant === "quote") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-md)",
        padding: 24,
        fontFamily: "var(--font-sans)",
        maxWidth: 340,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      rating: rating,
      size: 16
    }), /*#__PURE__*/React.createElement(GoogleG, {
      size: 18
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "14px 0 16px",
        fontSize: 14.5,
        lineHeight: "var(--lh-relaxed)",
        color: "var(--text-body)"
      }
    }, quote), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, name));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      padding: "10px 16px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(GoogleG, {
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: "var(--fw-bold)",
      color: "var(--text-heading)"
    }
  }, rating), /*#__PURE__*/React.createElement(Stars, {
    rating: rating,
    size: 13
  })), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, count, " reviews")));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — the brand's circular proof stat ("2377+ / Smiles Transformed").
 * Designed to sit on the cyan "Why Choose Us" band (tone="light" = white circle)
 * or on light surfaces (tone="tint").
 */
function StatBlock({
  value,
  label,
  tone = "light",
  size = 150,
  style,
  ...rest
}) {
  const tones = {
    light: {
      background: "var(--surface-page)",
      value: "var(--text-heading)",
      label: "var(--text-muted)"
    },
    tint: {
      background: "var(--surface-tint)",
      value: "var(--brand)",
      label: "var(--text-body)"
    },
    brand: {
      background: "var(--brand)",
      value: "#fff",
      label: "rgba(255,255,255,0.85)"
    }
  };
  const t = tones[tone] || tones.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-circle)",
      background: t.background,
      boxShadow: "var(--shadow-md)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 14px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "var(--ls-tight)",
      color: t.value,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12.5,
      fontWeight: "var(--fw-medium)",
      color: t.label,
      lineHeight: 1.3
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/TreatmentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TreatmentCard — the circular-photo treatment tile from the "Treatments We Offer"
 * grid: a round cropped photo above a centered name and "From £xxx" price.
 */
function TreatmentCard({
  image,
  imageAlt = "",
  name,
  price,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      background: "transparent",
      border: "none",
      cursor: onClick ? "pointer" : "default",
      fontFamily: "var(--font-sans)",
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 132,
      height: 132,
      borderRadius: "var(--radius-circle)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      display: "block"
    },
    onMouseEnter: e => {
      if (onClick) {
        e.currentTarget.style.transform = "scale(1.04)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, name), price != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "From ", price)));
}
Object.assign(__ds_scope, { TreatmentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TreatmentCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Input — labelled text field with optional leading Lucide icon.
 * Matches the contact-form style: rounded field, light hairline border,
 * cyan focus ring, cyan required marker.
 */
function Input({
  label,
  icon,
  required = false,
  type = "text",
  placeholder,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const inputId = id || (label ? String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "var(--surface-page)",
      border: `1.5px solid ${focused ? "var(--brand)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-pill)",
      padding: "12px 18px",
      boxShadow: focused ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: focused ? "var(--brand)" : "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-body)",
      minWidth: 0
    }
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Textarea — multi-line message field matching the Input style
 * (rounded corners, hairline border, cyan focus ring, cyan required marker).
 */
function Textarea({
  label,
  required = false,
  placeholder,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const inputId = id || (label ? String(label).toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-heading)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    placeholder: placeholder,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
      background: "var(--surface-page)",
      border: `1.5px solid ${focused ? "var(--brand)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-lg)",
      padding: "14px 18px",
      boxShadow: focused ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: "var(--lh-normal)",
      color: "var(--text-body)",
      outline: "none"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/sections/FaqList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * FaqList — the treatment-page FAQ accordion ("Everything You Need to Know
 * Before Treatment"): plain hairline-divided rows, question left, +/− right.
 * No cards, no fills.
 */
function FaqList({
  items = [],
  defaultOpen = null,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? "1px solid var(--border-faint)" : "none",
        borderBottom: "1px solid var(--border-faint)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "22px 4px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-h4)",
        fontWeight: "var(--fw-regular)",
        color: "var(--text-heading)",
        lineHeight: "var(--lh-snug)"
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "0 0 auto",
        fontSize: 22,
        fontWeight: "var(--fw-light)",
        color: "var(--text-heading)",
        lineHeight: 1
      }
    }, isOpen ? "−" : "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 4px 24px",
        maxWidth: 900,
        fontSize: "var(--fs-body)",
        lineHeight: "var(--lh-relaxed)",
        color: "var(--text-body)"
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { FaqList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/FaqList.jsx", error: String((e && e.message) || e) }); }

// components/sections/ListCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ListCard — the 3-up benefit/facility card from the treatment and
 * "Work With Us" pages: an intro paragraph then hairline-divided list rows.
 * tone="brand" fills the card cyan with white text; tone="light" is white.
 */
function ListCard({
  intro,
  items = [],
  tone = "light",
  style,
  ...rest
}) {
  const brand = tone === "brand";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      background: brand ? "var(--brand)" : "var(--surface-card)",
      color: brand ? "var(--text-on-brand)" : "var(--text-body)",
      borderRadius: "var(--radius-lg)",
      boxShadow: brand ? "none" : "var(--shadow-sm)",
      padding: 28,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 26px",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-relaxed)",
      color: "inherit"
    }
  }, intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginTop: "auto"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "14px 0",
      borderBottom: `1px solid ${brand ? "rgba(255,255,255,0.35)" : "var(--border-faint)"}`,
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-medium)",
      color: "inherit"
    }
  }, it))));
}
Object.assign(__ds_scope, { ListCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ListCard.jsx", error: String((e && e.message) || e) }); }

// components/sections/OverlayCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * OverlayCard — rounded photo card with a bold white caption over the lower
 * portion, as used in the "Work With Us" 3-up strip. A dark bottom-up
 * protection gradient keeps the text legible on any photo.
 */
function OverlayCard({
  image,
  imageAlt = "",
  title,
  children,
  height = 300,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      height,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 75%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 22,
      color: "var(--odl-white)"
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-bold)",
      lineHeight: "var(--lh-snug)"
    }
  }, title, " "), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-regular)",
      lineHeight: "var(--lh-snug)"
    }
  }, children)));
}
Object.assign(__ds_scope, { OverlayCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/OverlayCard.jsx", error: String((e && e.message) || e) }); }

// components/sections/PriceTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PriceTile — the treatment/price option tile from treatment pages:
 * a circular photo, the option name, a "From £xx per month" line and an
 * outline pill CTA with the cyan arrow chip. Lay out in a row of 3–4.
 */
function PriceTile({
  image,
  imageAlt = "",
  name,
  price,
  cta = "Price & Payment Options",
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      height: 150,
      borderRadius: "var(--radius-circle)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-regular)",
      color: "var(--text-heading)"
    }
  }, name), price && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { PriceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/PriceTile.jsx", error: String((e && e.message) || e) }); }

// components/sections/StepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StepCard — numbered treatment-journey card from the treatment pages
 * ("Invisalign London Treatment Guide"): rounded photo on the left, a cyan
 * numbered circle, optional small CTA, title, optional cost line, hairline
 * divider, then body copy.
 */
function StepCard({
  step,
  image,
  imageAlt = "",
  title,
  cost,
  costNote,
  cta,
  onCta,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,180px) minmax(0,1fr)",
      gap: 24,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: 22,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      borderRadius: "var(--radius-circle)",
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      fontSize: 14,
      fontWeight: "var(--fw-semibold)",
      flex: "0 0 auto"
    }
  }, step), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    chip: false,
    onClick: onCta,
    style: {
      borderRadius: "var(--radius-sm)"
    }
  }, cta)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-medium)",
      lineHeight: "var(--lh-snug)",
      color: "var(--text-heading)"
    }
  }, title), cost && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-heading)"
    }
  }, cost), costNote && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)"
    }
  }, costNote), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: "1px solid var(--border-faint)",
      margin: "6px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: "var(--lh-relaxed)",
      color: "var(--text-body)"
    }
  }, children)));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/StepCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactFooter.jsx
try { (() => {
// ODL website — Contact band (over team photo) + Footer
(() => {
  const {
    Button: CBtn,
    Input: CInput,
    Textarea: CTextarea
  } = window.ODLDentalClinicDesignSystem_798d6f;
  function ContactBand({
    formRef,
    submitted,
    onSubmit
  }) {
    return /*#__PURE__*/React.createElement("section", {
      ref: formRef,
      style: {
        background: "#fff",
        padding: "72px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 980,
        margin: "0 auto",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 10px",
        fontSize: "var(--fs-h1)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)"
      }
    }, "Ready to Transform Your Smile?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 36px",
        fontSize: "var(--fs-lead)",
        color: "var(--text-muted)"
      }
    }, "Or if you need further guidance, contact us.")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 980,
        margin: "0 auto",
        position: "relative",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: "var(--shadow-lg)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/images/clinic-team.jpg",
      alt: "ODL team",
      style: {
        width: "100%",
        height: 420,
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 32,
        right: 32,
        bottom: 28,
        background: "rgba(255,255,255,0.96)",
        borderRadius: "var(--radius-lg)",
        padding: 28,
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 18px",
        fontSize: "var(--fs-h4)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, "Contact Us"), submitted ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: "var(--brand)",
        fontWeight: "var(--fw-semibold)",
        padding: "16px 0"
      }
    }, "Thanks \u2014 we'll be in touch shortly.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 16,
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement(CInput, {
      label: "Full Name",
      icon: "user",
      placeholder: "Enter your full name",
      required: true
    }), /*#__PURE__*/React.createElement(CInput, {
      label: "Phone Number",
      icon: "phone",
      placeholder: "Your phone number"
    }), /*#__PURE__*/React.createElement(CInput, {
      label: "Email Address",
      icon: "mail",
      type: "email",
      placeholder: "you@example.com",
      required: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / 3"
      }
    }, /*#__PURE__*/React.createElement(CTextarea, {
      label: "Message",
      placeholder: "Type message here",
      rows: 2
    })), /*#__PURE__*/React.createElement(CBtn, {
      variant: "cta",
      onClick: onSubmit
    }, "Contact Us")))));
  }
  function FooterCol({
    title,
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)",
        marginBottom: 4
      }
    }, title), items.map(i => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        fontSize: 13.5,
        color: "var(--text-muted)",
        textDecoration: "none"
      }
    }, i)));
  }
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        padding: "56px 24px 40px",
        borderTop: "1px solid var(--border-faint)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/odl-logo.svg",
      alt: "ODL Dental Clinic",
      style: {
        height: 52,
        marginBottom: 16
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        lineHeight: "var(--lh-normal)",
        color: "var(--text-muted)",
        maxWidth: 240
      }
    }, "Award-winning London dental clinic offering expert orthodontic, cosmetic and general dental care.")), /*#__PURE__*/React.createElement(FooterCol, {
      title: "Treatments",
      items: ["General Dentistry", "Cosmetic Dentistry", "Facial Aesthetics", "Dental Implants", "View All Services"]
    }), /*#__PURE__*/React.createElement(FooterCol, {
      title: "Braces",
      items: ["Teeth Straightening", "Metal Braces", "White Braces", "Invisalign", "Six Month Braces"]
    }), /*#__PURE__*/React.createElement(FooterCol, {
      title: "Useful Links",
      items: ["Privacy Policy", "Terms & Conditions", "Complaints Handling", "General Dental Council", "Blog"]
    }), /*#__PURE__*/React.createElement(FooterCol, {
      title: "ODL Info",
      items: ["31 Finsbury Circus", "London, EC2M 5QQ", "020 7739 3345", "info@odldentalclinic.com"]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--brand)",
        padding: "14px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ODL Dental Clinic"), /*#__PURE__*/React.createElement("span", null, "Digital marketing by Remedo"))));
  }
  Object.assign(window, {
    ContactBand,
    Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// ODL website — Header (utility bar + main nav)
(() => {
  const {
    Button
  } = window.ODLDentalClinicDesignSystem_798d6f;
  function UtilityItem({
    icon,
    children
  }) {
    const {
      Icon
    } = window.ODLDentalClinicDesignSystem_798d6f;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 13,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 15,
      color: "#fff"
    }), children);
  }
  function Header({
    onBook
  }) {
    const links = ["Home", "About", "Treatments", "Patient Info", "Fees & Finance", "Smile Gallery"];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--brand)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "9px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(UtilityItem, {
      icon: "map-pin"
    }, "31 Finsbury Circus, London, EC2M 5QQ"), /*#__PURE__*/React.createElement(UtilityItem, {
      icon: "phone"
    }, "Tel \xB7 020 7739 3345"), /*#__PURE__*/React.createElement(UtilityItem, {
      icon: "mail"
    }, "Contact Us"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/odl-logo.svg",
      alt: "ODL Dental Clinic",
      style: {
        height: 46
      }
    }), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: 22,
        margin: "0 auto"
      }
    }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        fontSize: 14.5,
        fontWeight: "var(--fw-medium)",
        color: i === 0 ? "var(--brand)" : "var(--text-heading)",
        textDecoration: "none"
      }
    }, l))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      chip: false,
      onClick: onBook
    }, "Book an Appointment"))));
  }
  Object.assign(window, {
    Header
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// ODL website — Hero
(() => {
  const {
    Button: HeroBtn,
    ReviewCard: HeroReview
  } = window.ODLDentalClinicDesignSystem_798d6f;
  function Hero({
    onBook
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        background: "var(--surface-alt)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 460,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "56px 48px 56px 24px",
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(4px)",
        borderRadius: "var(--radius-xl)",
        padding: "36px 36px",
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: 8,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(HeroBtn, {
      variant: "outline",
      size: "sm",
      icon: "calendar"
    }, "Book an Appointment")), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: "var(--fs-display-lg)",
        lineHeight: "var(--lh-tight)",
        letterSpacing: "var(--ls-tight)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)"
      }
    }, "Exceptional Care Backed by Decades of Experience"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "18px 0 26px",
        fontSize: "var(--fs-lead)",
        lineHeight: "var(--lh-normal)",
        color: "var(--text-body)",
        maxWidth: 440
      }
    }, "The UK's most awarded dental clinic \u2014 orthodontic, cosmetic and general care from a highly skilled, multilingual team in the City of London."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(HeroBtn, {
      variant: "dark",
      onClick: onBook
    }, "Book an Appointment"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "var(--text-muted)"
      }
    }, "More than 10,000 orthodontic treatments completed")))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/images/patient-3.jpg",
      alt: "Happy patient",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: 20,
        bottom: 20
      }
    }, /*#__PURE__*/React.createElement(HeroReview, {
      rating: 4.9,
      count: 1302
    }))))));
  }
  Object.assign(window, {
    Hero
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Practices.jsx
try { (() => {
// ODL website — Our Practices
(() => {
  const {
    Card: PCard,
    Button: PBtn,
    Badge: PBadge
  } = window.ODLDentalClinicDesignSystem_798d6f;
  function PracticeText({
    eyebrow,
    title,
    body,
    cta,
    onBook
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 14
      }
    }, eyebrow && /*#__PURE__*/React.createElement(PBadge, {
      icon: "stethoscope",
      size: "sm",
      tone: "brand"
    }, eyebrow), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: "var(--fs-h3)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--fs-body)",
        lineHeight: "var(--lh-relaxed)",
        color: "var(--text-body)"
      }
    }, body), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PBtn, {
      variant: "outline",
      size: "sm",
      onClick: onBook
    }, cta)));
  }
  function Practices({
    onBook
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-tint)",
        padding: "72px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        textAlign: "center",
        margin: "0 0 44px",
        fontSize: "var(--fs-h2)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)"
      }
    }, "Our Practices"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 28,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(PCard, {
      padding: "0",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/images/clinic-sign.jpg",
      alt: "ODL clinic",
      style: {
        width: "100%",
        height: 240,
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement(PracticeText, {
      title: "ODL Dental Clinic: Orthodontist in London",
      body: "A well-established, multi-award-winning clinic offering high-quality teeth straightening, cosmetic and general dental treatments, with over a decade of experience treating patients.",
      cta: "Book ODL",
      onBook: onBook
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(PracticeText, {
      title: "London Orthodontic Clinic",
      body: "Our dedicated Invisalign Experience Studio, created to deliver a high-tech, personalised Invisalign treatment journey \u2014 combining advanced technology and clinical excellence.",
      cta: "Book LOC",
      onBook: onBook
    }), /*#__PURE__*/React.createElement(PCard, {
      padding: "0",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/images/team-meeting.jpg",
      alt: "London Orthodontic Clinic",
      style: {
        width: "100%",
        height: 240,
        objectFit: "cover",
        display: "block"
      }
    })))));
  }
  Object.assign(window, {
    Practices
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Practices.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
// ODL website — Awards row + Why Choose Us cyan band
(() => {
  const {
    StatBlock: WStat
  } = window.ODLDentalClinicDesignSystem_798d6f;
  function AwardsRow() {
    const badges = ["../../assets/badges/awards/pda-2024-team-of-year-london.svg", "../../assets/badges/awards/pda-2024-practice-manager-south.svg", "../../assets/badges/awards/pda-2024-practice-of-year-london-hc.svg", "../../assets/badges/awards/dental-awards-2025-winner.png", "../../assets/badges/awards/dentistry-2025-practice-manager-south.png", "../../assets/logos/invisalign-diamond-apex.svg"];
    const accreditations = ["../../assets/badges/accreditations/general-dental-council.jpg", "../../assets/badges/accreditations/care-quality-commission.png", "../../assets/badges/accreditations/british-orthodontic-society.png", "../../assets/badges/accreditations/bda-good-practice-member.jpg", "../../assets/badges/accreditations/american-association-of-orthodontists.jpg"];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "#fff",
        padding: "56px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        textAlign: "center",
        margin: "0 0 34px",
        fontSize: "var(--fs-h3)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-heading)"
      }
    }, "Join Thousands Who've Chosen the UK's Most Awarded Dental Clinic"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 24,
        flexWrap: "wrap"
      }
    }, badges.map((b, i) => /*#__PURE__*/React.createElement("img", {
      key: i,
      src: b,
      alt: "Award",
      style: {
        height: 82,
        maxWidth: 150,
        objectFit: "contain"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 32,
        flexWrap: "wrap",
        marginTop: 44,
        paddingTop: 36,
        borderTop: "1px solid var(--border-faint)"
      }
    }, accreditations.map((b, i) => /*#__PURE__*/React.createElement("img", {
      key: i,
      src: b,
      alt: "Accreditation",
      style: {
        height: 46,
        maxWidth: 150,
        objectFit: "contain"
      }
    })))));
  }
  function WhyChooseUs() {
    const stats = [{
      value: "2377+",
      label: "Smiles Transformed"
    }, {
      value: "4+",
      label: "Years of Trusted Care"
    }, {
      value: "ALL",
      label: "Specialists in One Place"
    }, {
      value: "7+",
      label: "Award-Winning Standards"
    }, {
      value: "26+",
      label: "People Who Care"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--brand)",
        padding: "64px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        textAlign: "center",
        margin: "0 0 44px",
        fontSize: "var(--fs-h2)",
        fontWeight: "var(--fw-bold)",
        color: "#fff"
      }
    }, "Why Choose Us"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap"
      }
    }, stats.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        flex: "1 1 0",
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(WStat, {
      value: s.value,
      label: s.label,
      tone: "light",
      size: 150
    }))))));
  }
  Object.assign(window, {
    AwardsRow,
    WhyChooseUs
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Treatments.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ODL website — Treatments grid
(() => {
  const {
    TreatmentCard: TCard,
    Button: TBtn
  } = window.ODLDentalClinicDesignSystem_798d6f;
  function Treatments({
    onBook
  }) {
    const items = [{
      name: "Metal Braces",
      price: "£999",
      image: "../../assets/images/patient-1.jpg"
    }, {
      name: "Invisalign",
      price: "£2800",
      image: "../../assets/images/dentist-brushing.jpg"
    }, {
      name: "Six Month Braces",
      price: "£1990",
      image: "../../assets/images/patient-2.jpg"
    }, {
      name: "Lingual Braces",
      price: "£2500",
      image: "../../assets/images/patient-3.jpg"
    }, {
      name: "White Braces",
      price: "£1149",
      image: "../../assets/images/clinician-1.jpg"
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "#fff",
        padding: "72px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        textAlign: "center",
        margin: "0 0 44px",
        fontSize: "var(--fs-h2)",
        fontWeight: "var(--fw-bold)",
        color: "var(--text-heading)"
      }
    }, "Treatments We Offer"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 24,
        justifyItems: "center"
      }
    }, items.map(it => /*#__PURE__*/React.createElement(TCard, _extends({
      key: it.name
    }, it, {
      onClick: onBook
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement(TBtn, {
      variant: "dark",
      onClick: onBook
    }, "Book an Appointment"))));
  }
  Object.assign(window, {
    Treatments
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Treatments.jsx", error: String((e && e.message) || e) }); }

__ds_ns.TitleGlyph = __ds_scope.TitleGlyph;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TreatmentCard = __ds_scope.TreatmentCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.FaqList = __ds_scope.FaqList;

__ds_ns.ListCard = __ds_scope.ListCard;

__ds_ns.OverlayCard = __ds_scope.OverlayCard;

__ds_ns.PriceTile = __ds_scope.PriceTile;

__ds_ns.StepCard = __ds_scope.StepCard;

})();
