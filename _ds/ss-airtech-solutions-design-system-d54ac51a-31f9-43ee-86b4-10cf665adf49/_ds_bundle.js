/* @ds-bundle: {"format":4,"namespace":"SSAirTechSolutionsDesignSystem_d54ac5","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"FeatureTable","sourcePath":"components/data/FeatureTable.jsx"},{"name":"SpecTable","sourcePath":"components/data/SpecTable.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"AngledBand","sourcePath":"components/marketing/AngledBand.jsx"},{"name":"CTABanner","sourcePath":"components/marketing/CTABanner.jsx"},{"name":"ProductCard","sourcePath":"components/marketing/ProductCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"ValueTile","sourcePath":"components/marketing/ValueTile.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"78b72c963691","components/core/Button.jsx":"e5deb10850ab","components/core/Card.jsx":"06f1d157275e","components/core/Icon.jsx":"c5f8ade1f018","components/core/Logo.jsx":"896b0856a194","components/core/Tag.jsx":"1ecae093f33d","components/data/FeatureTable.jsx":"b1c038eff54c","components/data/SpecTable.jsx":"9ea24440a27d","components/forms/Checkbox.jsx":"8056b9c80bd3","components/forms/Input.jsx":"41ca28c0bbad","components/forms/Select.jsx":"49f045d45846","components/marketing/AngledBand.jsx":"3c0156a8d3c7","components/marketing/CTABanner.jsx":"c53a87874ecd","components/marketing/ProductCard.jsx":"818b5cf0ec34","components/marketing/SectionHeading.jsx":"477753aabbff","components/marketing/StatBlock.jsx":"4461f56a28bb","components/marketing/ValueTile.jsx":"d57bcfb64372","components/navigation/SiteFooter.jsx":"24da0b11d002","components/navigation/SiteHeader.jsx":"8ee2545de980","components/navigation/Tabs.jsx":"6e23f6d8b006","ui_kits/website/Contact.jsx":"7bdab7af3e2b","ui_kits/website/Home.jsx":"3a2d1cb8eba8","ui_kits/website/Products.jsx":"d57b889552a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SSAirTechSolutionsDesignSystem_d54ac5 = window.SSAirTechSolutionsDesignSystem_d54ac5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  interactive,
  padding = 'var(--space-6)',
  tone = 'default',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)'
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid var(--border-card)'
    },
    inverse: {
      background: 'var(--navy-800)',
      border: '1px solid var(--navy-600)',
      color: 'var(--white)'
    },
    flat: {
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'var(--lift-hover)' : 'none',
      transition: 'var(--transition-lift)',
      cursor: interactive ? 'pointer' : undefined,
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Icons are Lucide (lucide-static via CDN). The supplied brand assets ship icons
   only as flattened artwork baked into print fliers, so Lucide is a documented
   substitution: 2px-stroke line icons, the closest match to the catalogue's glyphs.
   The SVG is fetched once per name and inlined so it inherits currentColor. */

const ICON_VERSION = '0.417.0';
const cache = new Map();
function load(name) {
  if (!cache.has(name)) {
    cache.set(name, fetch(`https://unpkg.com/lucide-static@${ICON_VERSION}/icons/${name}.svg`).then(r => r.ok ? r.text() : '').catch(() => ''));
  }
  return cache.get(name);
}
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    let live = true;
    load(name).then(text => {
      if (!live) return;
      setSvg(text.replace(/width="24"/, `width="${size}"`).replace(/height="24"/, `height="${size}"`).replace(/stroke-width="2"/, `stroke-width="${strokeWidth}"`));
    });
    return () => {
      live = false;
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    dangerouslySetInnerHTML: {
      __html: svg
    },
    style: {
      display: 'inline-flex',
      flex: 'none',
      width: size,
      height: size,
      color,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  navy: {
    background: 'var(--navy-700)',
    color: 'var(--white)'
  },
  eco: {
    background: 'var(--green-600)',
    color: 'var(--white)'
  },
  gold: {
    background: 'var(--gold-500)',
    color: 'var(--navy-900)'
  },
  danger: {
    background: 'var(--red-600)',
    color: 'var(--white)'
  },
  tintNavy: {
    background: 'var(--blue-50)',
    color: 'var(--navy-700)'
  },
  tintEco: {
    background: 'var(--green-50)',
    color: 'var(--green-700)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--navy-700)',
    boxShadow: 'inset 0 0 0 1px var(--navy-700)'
  }
};
function Badge({
  children,
  tone = 'navy',
  icon,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.navy;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      padding: '5px 10px',
      borderRadius: 'var(--radius-xs)',
      lineHeight: 1.1,
      ...t,
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-xs)',
    gap: '6px',
    icon: 14
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--text-sm)',
    gap: '8px',
    icon: 16
  },
  lg: {
    padding: '16px 34px',
    fontSize: 'var(--text-md)',
    gap: '10px',
    icon: 20
  }
};
const variants = {
  primary: {
    background: 'var(--navy-700)',
    color: 'var(--white)',
    border: '2px solid var(--navy-700)'
  },
  eco: {
    background: 'var(--green-600)',
    color: 'var(--white)',
    border: '2px solid var(--green-600)'
  },
  offer: {
    background: 'var(--gold-500)',
    color: 'var(--navy-900)',
    border: '2px solid var(--gold-500)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--navy-700)',
    border: '2px solid var(--navy-700)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--navy-700)',
    border: '2px solid transparent'
  },
  inverse: {
    background: 'var(--white)',
    color: 'var(--navy-800)',
    border: '2px solid var(--white)'
  }
};
const hovers = {
  primary: {
    background: 'var(--navy-900)',
    borderColor: 'var(--navy-900)'
  },
  eco: {
    background: 'var(--green-700)',
    borderColor: 'var(--green-700)'
  },
  offer: {
    background: 'var(--gold-400)',
    borderColor: 'var(--gold-400)'
  },
  secondary: {
    background: 'var(--navy-700)',
    color: 'var(--white)'
  },
  ghost: {
    background: 'var(--blue-50)'
  },
  inverse: {
    background: 'var(--blue-50)',
    borderColor: 'var(--blue-50)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth,
  disabled,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: !href ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      fontSize: s.fontSize,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      padding: s.padding,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: 'none',
      lineHeight: 1.1,
      whiteSpace: 'nowrap',
      transition: 'var(--transition-control), transform var(--duration-fast) var(--ease-standard)',
      transform: press ? 'scale(var(--press-scale))' : 'none',
      opacity: disabled ? 0.45 : 1,
      ...v,
      ...(hover && !disabled ? hovers[variant] : null)
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The real brand mark. Two supplied lockups: "AirTech Solutions" and "SS AirTech
   Solutions". Never redraw it — always use the supplied PNG. */
function Logo({
  variant = 'ss',
  height = 48,
  base = '',
  style,
  ...rest
}) {
  const src = variant === 'ss' ? base + 'assets/ss-energy.png' : base + 'assets/logo-ss.png';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "SS AirTech Solutions"
  }, rest, {
    style: {
      height,
      width: 'auto',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  active,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (active ? 'var(--navy-700)' : 'var(--border-default)'),
      background: active ? 'var(--navy-700)' : hover ? 'var(--blue-50)' : 'var(--white)',
      color: active ? 'var(--white)' : 'var(--navy-800)',
      transition: 'var(--transition-control)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/FeatureTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureTable({
  rows = [],
  headings = ['Key product features', 'Benefits'],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("table", _extends({}, rest, {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid var(--navy-700)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headings.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      background: 'var(--navy-700)',
      color: 'var(--white)',
      textAlign: 'left',
      padding: '12px 16px',
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderRight: i === 0 ? '1px solid var(--white)' : 'none',
      width: i === 0 ? '46%' : undefined
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      borderTop: '1px solid var(--border-default)',
      borderRight: '1px solid var(--navy-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      color: 'var(--navy-800)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: r.icon || 'check',
    size: 18,
    color: "var(--navy-700)"
  }), r.feature)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      borderTop: '1px solid var(--border-default)',
      color: 'var(--text-body)',
      fontSize: 'var(--text-sm)'
    }
  }, r.benefit)))));
}
Object.assign(__ds_scope, { FeatureTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FeatureTable.jsx", error: String((e && e.message) || e) }); }

// components/data/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Recreates the catalogue's TECHNICAL SPECIFICATION table: navy header, navy
   sub-section rows, hairline grid, monospaced figures, zebra tint. */
function SpecTable({
  columns = [],
  groups = [],
  caption,
  style,
  ...rest
}) {
  const th = {
    background: 'var(--navy-700)',
    color: 'var(--white)',
    fontFamily: 'var(--font-headline)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: 'var(--text-xs)',
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    padding: '10px 12px',
    textAlign: 'center',
    borderRight: '1px solid var(--navy-600)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      ...style
    }
  }), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...th,
      textAlign: i === 0 ? 'left' : 'center'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, groups.map((g, gi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: gi
  }, g.label ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      background: 'var(--navy-800)',
      color: 'var(--white)',
      padding: '8px 12px',
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, g.label, g.note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-regular)',
      textTransform: 'none',
      letterSpacing: 0,
      color: 'var(--blue-200)'
    }
  }, "  ", g.note) : null)) : null, g.rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      background: ri % 2 ? 'var(--blue-50)' : 'var(--white)'
    }
  }, r.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      padding: '8px 12px',
      borderTop: '1px solid var(--border-subtle)',
      borderRight: '1px solid var(--border-subtle)',
      fontFamily: ci === 0 ? 'var(--font-body)' : 'var(--font-mono)',
      fontWeight: ci === 0 ? 'var(--weight-semibold)' : 'var(--weight-regular)',
      color: ci === 0 ? 'var(--navy-800)' : 'var(--text-body)',
      fontSize: 'var(--text-sm)',
      textAlign: ci === 0 ? 'left' : 'center',
      whiteSpace: 'nowrap'
    }
  }, cell)))))))), caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--navy-700)' : 'var(--white)',
      border: '1px solid ' + (checked ? 'var(--navy-700)' : 'var(--border-default)'),
      transition: 'var(--transition-control)'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--white)"
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  required,
  as = 'input',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--navy-800)',
      marginBottom: 'var(--space-2)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-600)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--gray-900)',
      padding: as === 'textarea' ? '12px 14px' : '0 14px',
      height: as === 'textarea' ? undefined : 46,
      minHeight: as === 'textarea' ? 110 : undefined,
      resize: as === 'textarea' ? 'vertical' : undefined,
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (error ? 'var(--red-600)' : focus ? 'var(--navy-700)' : 'var(--border-default)'),
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  })), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--red-600)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  required,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--navy-800)',
      marginBottom: 'var(--space-2)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red-600)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 46,
      padding: '0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--gray-900)',
      background: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (focus ? 'var(--navy-700)' : 'var(--border-default)'),
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)'
    }
  }), options.map((o, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/AngledBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The catalogue's signature device: a navy block whose leading edge is cut on a
   diagonal. Content stays upright; only the container is skewed. */
function AngledBand({
  children,
  tone = 'navy',
  side = 'left',
  padding = 'var(--space-4) var(--space-8)',
  style,
  ...rest
}) {
  const fills = {
    navy: {
      background: 'var(--gradient-band)',
      color: 'var(--white)'
    },
    solid: {
      background: 'var(--navy-700)',
      color: 'var(--white)'
    },
    eco: {
      background: 'var(--gradient-eco)',
      color: 'var(--white)'
    },
    gold: {
      background: 'var(--gold-500)',
      color: 'var(--navy-900)'
    }
  };
  const cut = side === 'left' ? 'polygon(28px 0, 100% 0, 100% 100%, 0 100%)' : side === 'right' ? 'polygon(0 0, 100% 0, calc(100% - 28px) 100%, 0 100%)' : 'polygon(28px 0, 100% 0, calc(100% - 28px) 100%, 0 100%)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      clipPath: cut,
      padding,
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      boxShadow: 'var(--shadow-band)',
      ...fills[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { AngledBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/AngledBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTABanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABanner({
  title,
  subtitle,
  actionLabel,
  onAction,
  href,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--gradient-band)',
      color: 'var(--white)',
      padding: 'var(--space-10) var(--space-12)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-8)',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow-band)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '58ch'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-2xl)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--white)'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      color: 'var(--blue-200)',
      fontSize: 'var(--text-md)'
    }
  }, subtitle) : null), actionLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onAction,
    href: href
  }, actionLabel) : null);
}
Object.assign(__ds_scope, { CTABanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTABanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  image,
  model,
  name,
  specs = [],
  badge,
  imageBackground,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: !!onClick,
    padding: "0",
    onClick: onClick,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-700)',
      color: 'var(--white)',
      textAlign: 'center',
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      padding: '10px var(--space-4)'
    }
  }, model), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: imageBackground || 'var(--white)',
      padding: 'var(--space-5)',
      display: 'grid',
      placeItems: 'center',
      height: 200
    }
  }, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "eco"
  }, badge)) : null, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name || model,
    style: {
      maxHeight: 160,
      width: 'auto',
      objectFit: 'contain'
    }
  }) : null), name || specs.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: 'var(--space-4) var(--space-5)'
    }
  }, name ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--navy-800)',
      fontSize: 'var(--text-md)',
      marginBottom: specs.length ? 'var(--space-2)' : 0
    }
  }, name) : null, specs.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, s))) : null) : null);
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  children,
  align = 'left',
  rule = true,
  tone = 'light',
  style,
  ...rest
}) {
  const heading = tone === 'dark' ? 'var(--white)' : 'var(--navy-800)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      textAlign: align,
      ...style
    }
  }), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'dark' ? 'var(--green-400)' : 'var(--green-600)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: heading,
      lineHeight: 'var(--leading-snug)'
    }
  }, children), rule ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--border-width-rule)',
      width: 56,
      background: 'var(--green-500)',
      marginTop: 'var(--space-4)',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  tone = 'light',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-tight)',
      color: tone === 'dark' ? 'var(--white)' : 'var(--navy-700)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      marginTop: 'var(--space-2)',
      color: tone === 'dark' ? 'var(--blue-200)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ValueTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ValueTile({
  icon,
  title,
  children,
  tone = 'navy',
  style,
  ...rest
}) {
  const accent = tone === 'eco' ? 'var(--green-600)' : 'var(--navy-700)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      textAlign: 'center',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      margin: '0 auto var(--space-4)',
      display: 'grid',
      placeItems: 'center',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-tint)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 44,
    color: accent
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: accent,
      marginBottom: 'var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children));
}
Object.assign(__ds_scope, { ValueTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ValueTile.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  base = '',
  columns = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--blue-200)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-6) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      padding: 'var(--space-3) var(--space-4)',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "ss",
    height: 44,
    base: base
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: '34ch'
    }
  }, "Your trusted partner for compressed air solutions. Sales, installation, spare parts and AMC across Tamil Nadu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--green-400)"
  }), "No. 8/1, Gandhi Nagar, Megarali Street, Vellalore, Coimbatore \u2014 641111"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16,
    color: "var(--green-400)"
  }), "9790029225 / 9790029316 / 9790039214"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 16,
    color: "var(--green-400)"
  }), "support@ssairtechsolution.com"))), columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--white)',
      fontFamily: 'var(--font-headline)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      marginBottom: 'var(--space-4)'
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, col.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--navy-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--space-6)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " SS AirTech Solutions. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-400)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, "OPTIMIZE \xB7 SAVE \xB7 SUSTAIN"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  items = [],
  active,
  onNavigate,
  base = '',
  phone = '9790029225 / 9790029316 / 9790039214',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--white)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("style", null, `
    .ss-hdr-toggle{display:none}
    @media (max-width: 860px){
      .ss-hdr-topbar{display:none !important}
      .ss-hdr-nav{display:none !important}
      .ss-hdr-quote-desktop{display:none !important}
      .ss-hdr-toggle{display:inline-flex !important}
      .ss-hdr-nav.ss-open{display:flex !important;flex-direction:column;align-items:flex-start;position:absolute;top:100%;left:0;right:0;background:var(--white);padding:var(--space-5) var(--space-6);box-shadow:var(--shadow-md);gap:var(--space-4);z-index:60;margin-left:0}
    }
  `), /*#__PURE__*/React.createElement("div", {
    className: 'ss-hdr-topbar',
    style: {
      background: 'var(--navy-800)',
      color: 'var(--blue-200)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '8px var(--space-6)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 13,
    color: "var(--green-400)"
  }), "Gandhi Nagar, Megarali Street, Vellalore, Coimbatore \u2014 641111"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 13,
    color: "var(--green-400)"
  }), phone), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 13,
    color: "var(--green-400)"
  }), "support@ssairtechsolution.com")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "ss",
    height: 52,
    base: base
  }), /*#__PURE__*/React.createElement("nav", {
    className: 'ss-hdr-nav' + (open ? ' ss-open' : ''),
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      type: "button",
      onClick: () => { onNavigate && onNavigate(it); setOpen(false); },
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 0',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: on ? 'var(--navy-700)' : 'var(--gray-600)',
        borderBottom: '3px solid ' + (on ? 'var(--green-500)' : 'transparent'),
        transition: 'var(--transition-control)'
      }
    }, it);
  }), open && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "phone-call",
    onClick: () => { onNavigate && onNavigate('Contact'); setOpen(false); }
  }, "Get a quote")), /*#__PURE__*/React.createElement("div", {
    className: 'ss-hdr-quote-desktop',
    style: { marginLeft: open ? 0 : 'auto' }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "phone-call",
    onClick: () => onNavigate && onNavigate('Contact')
  }, "Get a quote")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'ss-hdr-toggle',
    onClick: () => setOpen(o => !o),
    "aria-label": "Toggle menu",
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px',
      cursor: 'pointer',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 22,
    color: "var(--navy-700)"
  })))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  active,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }), items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      type: "button",
      onClick: () => onChange && onChange(it),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '12px 2px',
        fontFamily: 'var(--font-headline)',
        fontSize: 'var(--text-md)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: on ? 'var(--navy-700)' : 'var(--gray-500)',
        borderBottom: '3px solid ' + (on ? 'var(--green-500)' : 'transparent'),
        marginBottom: -1,
        transition: 'var(--transition-control)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const NS = window.SSAirTechSolutionsDesignSystem_d54ac5;
const {
  Button,
  Card,
  Icon,
  SectionHeading,
  Input,
  Select,
  Checkbox,
  Badge
} = NS;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get in touch"
  }, "Request a quote"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 'var(--measure)'
    }
  }, "Tell us the HP, working pressure and application. Our engineers will size the right unit and send a written quotation, usually within one working day."), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      marginTop: 'var(--space-8)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 56,
    color: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-xl)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "Enquiry received"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      color: 'var(--text-muted)'
    }
  }, "We will call you on the number provided within one working day."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 'var(--space-6)'
    },
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Company name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "98765 43210",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Product range",
    options: ['Reciprocating compressors', 'Screw compressors', 'Submersible pumps', 'Spare parts & service']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Your requirement",
    as: "textarea",
    placeholder: "HP, working pressure, application, quantity"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the product catalogue on WhatsApp",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "send",
    onClick: () => setSent(true)
  }, "Send enquiry")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--text-lg)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "SS AirTech Solutions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-5)',
      color: 'var(--blue-200)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18,
    color: "var(--green-400)"
  }), /*#__PURE__*/React.createElement("span", null, "No. 8/1, Gandhi Nagar, Megarali Street,", /*#__PURE__*/React.createElement("br", null), "Vellalore, Coimbatore \u2014 641111, Tamil Nadu, India")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "var(--green-400)"
  }), "9790029225 / 9790029316 / 9790039214"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18,
    color: "var(--green-400)"
  }), "support@ssairtechsolution.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 18,
    color: "var(--green-400)"
  }), "www.ssairtech.com"))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "Service & AMC"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Breakdown support, preventive maintenance visits and genuine spare parts for all AT-series units."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "tintNavy"
  }, "Installation"), /*#__PURE__*/React.createElement(Badge, {
    tone: "tintNavy"
  }, "Commissioning"), /*#__PURE__*/React.createElement(Badge, {
    tone: "tintEco"
  }, "AMC"))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const NS = window.SSAirTechSolutionsDesignSystem_d54ac5;
const {
  Button,
  Badge,
  Card,
  Icon,
  SectionHeading,
  AngledBand,
  ValueTile,
  ProductCard,
  StatBlock,
  CTABanner,
  FeatureTable,
  Tag
} = NS;
const B = '../../';
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-band)',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--space-6) 64px',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--green-400)'
    }
  }, "Energy conservation \u2014 Innovation \u2014 Smart technology"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-6xl)',
      lineHeight: 'var(--leading-tight)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      margin: 'var(--space-4) 0 0'
    }
  }, "High ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-400)'
    }
  }, "performance"), /*#__PURE__*/React.createElement("br", null), "screw air compressors"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--text-md)',
      color: 'var(--blue-200)',
      maxWidth: '52ch',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Authorised dealer for Sollant Stahl kompresor \u2014 all kinds of screw compressors, air dryers and accessories. Plus our own AT-series reciprocating compressors, supplied, installed and serviced across Tamil Nadu."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('Contact')
  }, "Request a quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "eco",
    size: "lg",
    icon: "package",
    onClick: () => go('Products')
  }, "View products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-10)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "SLT 45V",
    label: "Screw range"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "3\u201315 HP",
    label: "AT series"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "dark",
    value: "IS 5456",
    label: "Tested to"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: B + 'assets/sollant-screw-range.png',
    alt: "Sollant Stahl SLT 15V, SLT 37V and SLT 45V screw air compressors",
    style: {
      width: '100%',
      objectFit: 'contain',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement(AngledBand, {
    tone: "eco",
    style: {
      fontSize: 'var(--text-sm)',
      marginTop: 'var(--space-4)',
      justifyContent: 'center'
    }
  }, "SLT 15V \xB7 SLT 37V \xB7 SLT 45V"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--space-6)',
      display: 'flex',
      gap: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, [['zap', 'High performance', 'Engineered for maximum output'], ['shield-check', 'Built to last', 'Heavy duty construction'], ['wrench', 'Sales · Service · AMC', 'Everything you need, all in one place'], ['truck', 'Wide service support', 'Pan India service network']].map(([i, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      flex: 1,
      minWidth: 210
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 28,
    color: "var(--green-400)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--blue-200)'
    }
  }, s)))))));
}
function Section({
  children,
  tint,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tint ? 'var(--surface-subtle)' : 'var(--white)',
      padding: 'var(--section-pad-y) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, children));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'center',
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: B + 'assets/sollant-stahl-dealer-badge.png',
    alt: "Authorised dealer for Sollant Stahl kompresor",
    style: {
      height: 108,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why choose",
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Sollant Stahl"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, ['Advanced German technology', 'Energy efficient & cost saving', 'Reliable performance', 'Low maintenance', 'Long service life', 'Global quality standards'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--text-md)',
      color: 'var(--navy-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 20,
    color: "var(--green-600)"
  }), t)))), /*#__PURE__*/React.createElement("img", {
    src: B + 'assets/sollant-screw-range.png',
    alt: "Sollant Stahl screw air compressor range",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)'
    }
  })), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "AT series",
    align: "center"
  }, "Core values that benefit the customer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(ValueTile, {
    icon: "shield-check",
    title: "High reliability"
  }, "Robust internal parts and lesser service points ensure lower down time of the compressor."), /*#__PURE__*/React.createElement(ValueTile, {
    icon: "piggy-bank",
    title: "Cost effective"
  }, "Offers low life cycle cost with zero compromise on performance and quality."), /*#__PURE__*/React.createElement(ValueTile, {
    icon: "leaf",
    tone: "eco",
    title: "Energy efficient"
  }, "Best in class flow for specified HP with high efficiency IE2 motors."), /*#__PURE__*/React.createElement(ValueTile, {
    icon: "hard-hat",
    title: "Operator safety"
  }, "Compressor design conforms to ASME codes and OSHA safety standards."))), /*#__PURE__*/React.createElement(Section, {
    tint: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Complete air solutions"
  }, "Everything you need. All in one place."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => go('Products')
  }, "All products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-10)'
    }
  }, [['Screw air compressors', 'sollant-screw-unit'], ['Air tanks', 'sollant-air-tank'], ['Air dryers', 'sollant-air-dryer'], ['Air filters', 'sollant-air-filters'], ['Piping solutions', 'sollant-piping-solutions'], ['Genuine spare parts', 'sollant-genuine-spare-parts']].map(([t, img]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    padding: "0",
    style: {
      overflow: 'hidden'
    },
    onClick: () => go('Products')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: 'var(--navy-950)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: B + 'assets/' + img + '.png',
    alt: t,
    style: {
      maxHeight: 130,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3) var(--space-4)',
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--navy-800)',
      textAlign: 'center'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    model: "AT S03LB 250LTS",
    image: B + 'assets/product-tank-mounted-500l.jpeg',
    name: "AT series \xB7 single-stage",
    specs: ['3 HP', '160 L', '9 kg/cm²'],
    onClick: () => go('Products')
  }), /*#__PURE__*/React.createElement(ProductCard, {
    model: "AT S10LB 500LTS",
    image: B + 'assets/product-piston-compressor.png',
    name: "AT series \xB7 single-stage",
    specs: ['10 HP', '220 L', '9 kg/cm²'],
    badge: "IE2",
    onClick: () => go('Products')
  }), /*#__PURE__*/React.createElement(ProductCard, {
    model: "AT T15LB 500LTS",
    image: B + 'assets/product-screw-2.jpeg',
    name: "AT series \xB7 two-stage",
    specs: ['15 HP', '500 L', '12 kg/cm²'],
    onClick: () => go('Products')
  }), /*#__PURE__*/React.createElement(ProductCard, {
    model: "VFD control panel",
    image: B + 'assets/product-vfd-panel.jpg',
    name: "Starter & VFD panels",
    specs: ['3–30 HP', 'IP54'],
    onClick: () => go('Products')
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Built right"
  }, "Key product features"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 'var(--measure)'
    }
  }, "Every AT-series compressor uses a cast iron block, an industrial duty rating and slow running speeds \u2014 the combination that keeps wear low and uptime high on a two-shift factory floor."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "tintNavy"
  }, "Cast iron block"), /*#__PURE__*/React.createElement(Badge, {
    tone: "tintNavy"
  }, "IS 5456 tested"), /*#__PURE__*/React.createElement(Badge, {
    tone: "tintEco",
    icon: "leaf"
  }, "IE2 motor"), /*#__PURE__*/React.createElement(Badge, {
    tone: "tintNavy"
  }, "ASME conform"))), /*#__PURE__*/React.createElement(FeatureTable, {
    rows: [{
      icon: 'box',
      feature: 'Cast iron block',
      benefit: 'Outperforms and outlasts aluminium block compressor'
    }, {
      icon: 'factory',
      feature: 'Industrial duty rating',
      benefit: 'No stand-by compressor required'
    }, {
      icon: 'gauge',
      feature: 'Slow running speed',
      benefit: 'Low wear & tear'
    }, {
      icon: 'shield',
      feature: 'Totally enclosed belt guard',
      benefit: 'Full protection against accidents'
    }, {
      icon: 'droplets',
      feature: 'Leak proof fittings',
      benefit: 'No compressed air leakage'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    tint: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, [['Spare parts', 'assets/product-spare-parts.jpg', 'Pistons, rings, connecting rods, valves and gaskets for all AT models.'], ['Filters & separators', 'assets/product-filters.png', 'Air, oil and separator elements for screw compressor service intervals.'], ['Submersible pumps', 'assets/flier-submersible-pumps.png', 'Authorised KVN dealer — pumps for homes, farms and industries.']].map(([t, img, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    padding: "0",
    style: {
      overflow: 'hidden'
    },
    onClick: () => go('Products')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: B + img,
    alt: t,
    style: {
      maxHeight: 150,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(CTABanner, {
    title: "Your trusted partner for compressed air solutions",
    subtitle: "Talk to our engineers about sizing, installation, spare parts and annual maintenance contracts.",
    actionLabel: "Request a quote",
    onAction: () => go('Contact')
  })));
}
Object.assign(window, {
  Home,
  Section,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Products.jsx
try { (() => {
const NS = window.SSAirTechSolutionsDesignSystem_d54ac5;
const {
  Button,
  Badge,
  Card,
  Icon,
  SectionHeading,
  AngledBand,
  ProductCard,
  SpecTable,
  Tabs,
  Tag
} = NS;
const B = '../../';
const MODELS = [{
  model: 'SLT 15V',
  name: 'Sollant Stahl · PM VSD screw',
  range: 'Sollant screw',
  img: 'assets/sollant-slt-15v.png',
  specs: ['15 kW', '20 HP', '8–16 bar'],
  badge: 'PM VSD'
}, {
  model: 'SLT 37V',
  name: 'Sollant Stahl · PM VSD screw',
  range: 'Sollant screw',
  img: 'assets/sollant-slt-37v.png',
  specs: ['37 kW', '50 HP', '8–16 bar'],
  badge: 'PM VSD'
}, {
  model: 'SLT 45V',
  name: 'Sollant Stahl · PM VSD screw',
  range: 'Sollant screw',
  img: 'assets/sollant-slt-45v.png',
  specs: ['45 kW', '60 HP', '8–16 bar'],
  badge: 'PM VSD'
}, {
  model: 'SLT-22F',
  name: 'Sollant Stahl · fixed speed screw',
  range: 'Sollant screw',
  img: 'assets/sollant-slt-37v.png',
  specs: ['22 kW', '30 HP', '8–16 bar'],
  badge: 'Sollant'
}, {
  model: 'SLT-45F',
  name: 'Sollant Stahl · fixed speed screw',
  range: 'Sollant screw',
  img: 'assets/sollant-slt-45v.png',
  specs: ['45 kW', '60 HP', '8–16 bar'],
  badge: 'Sollant'
}, {
  model: 'Air dryers',
  name: 'Refrigerated air dryers',
  range: 'Sollant screw',
  img: 'assets/sollant-air-dryer.png',
  specs: ['Post-processing'],
  dark: true
}, {
  model: 'AT S03LB 250LTS',
  name: 'Single-stage',
  range: 'Single-stage',
  img: 'assets/product-tank-mounted-500l.jpeg',
  specs: ['3 HP', '160 L', '9 kg/cm²']
}, {
  model: 'AT S05LB 250LTS',
  name: 'Single-stage',
  range: 'Single-stage',
  img: 'assets/product-piston-compressor.png',
  specs: ['5 HP', '220 L', '9 kg/cm²']
}, {
  model: 'AT S07LB 250LTS',
  name: 'Single-stage',
  range: 'Single-stage',
  img: 'assets/product-tank-mounted-500l.jpeg',
  specs: ['7.5 HP', '220 L', '9 kg/cm²']
}, {
  model: 'AT S15LB 500LTS',
  name: 'Single-stage',
  range: 'Single-stage',
  img: 'assets/product-piston-compressor.png',
  specs: ['15 HP', '500 L', '9 kg/cm²'],
  badge: 'IE2'
}, {
  model: 'AT T10LB 420LTS',
  name: 'Two-stage',
  range: 'Two-stage',
  img: 'assets/product-screw-2.jpeg',
  specs: ['10 HP', '420 L', '12 kg/cm²']
}, {
  model: 'AT T15LB 500LTS',
  name: 'Two-stage',
  range: 'Two-stage',
  img: 'assets/product-screw-3.jpeg',
  specs: ['15 HP', '500 L', '12 kg/cm²']
}, {
  model: 'VFD control panel',
  name: 'Starter & VFD panels',
  range: 'Accessories',
  img: 'assets/product-vfd-panel.jpg',
  specs: ['3–30 HP', 'IP54']
}, {
  model: 'Air tanks',
  name: 'Receivers',
  range: 'Accessories',
  img: 'assets/sollant-air-tank.png',
  specs: ['160–500 L'],
  dark: true
}, {
  model: 'Air filters',
  name: 'Line filters',
  range: 'Accessories',
  img: 'assets/sollant-air-filters.png',
  specs: ['Particulate', 'Coalescing'],
  dark: true
}, {
  model: 'Piping solutions',
  name: 'Aluminium ring main',
  range: 'Accessories',
  img: 'assets/sollant-piping-solutions.png',
  specs: ['Layout', 'Install'],
  dark: true
}, {
  model: 'Service kit',
  name: 'Filters & separators',
  range: 'Accessories',
  img: 'assets/product-filters.png',
  specs: ['Air', 'Oil', 'Separator']
}];
const SLT_COLUMNS = ['Model', 'kW', 'HP', 'Bar', 'm³/min', 'cfm', 'Air outlet', 'Noise dB', 'Drive', 'Start', 'L×W×H (mm)', 'Weight kg'];
const SLT_GROUPS = [{
  label: 'SLT-7.5F',
  note: '(7.5 kW · 10 HP)',
  rows: [['SLT-7.5F', '7.5', '10', '8', '1.1', '38.84', 'DN20', '60 ± 2', 'Direct', 'Star delta', '950×687×930', '213'], ['SLT-7.5F', '7.5', '10', '10', '0.9', '31.78', 'DN20', '60 ± 2', 'Direct', 'Star delta', '950×687×930', '207'], ['SLT-7.5F', '7.5', '10', '13', '0.63', '22.25', 'DN20', '60 ± 2', 'Direct', 'Star delta', '950×687×930', '207']]
}, {
  label: 'SLT-11F',
  note: '(11 kW · 15 HP)',
  rows: [['SLT-11F', '11', '15', '8', '1.75', '61.79', 'DN20', '62 ± 2', 'Direct', 'Star delta', '1090×740×1065', '317'], ['SLT-11F', '11', '15', '10', '1.65', '58.26', 'DN20', '62 ± 2', 'Direct', 'Star delta', '1090×740×1065', '317'], ['SLT-11F', '11', '15', '13', '1.1', '38.84', 'DN20', '62 ± 2', 'Direct', 'Star delta', '1090×740×1065', '317'], ['SLT-11F', '11', '15', '16', '0.88', '31.07', 'DN20', '62 ± 2', 'Direct', 'Star delta', '1090×740×1065', '317']]
}, {
  label: 'SLT-15F',
  note: '(15 kW · 20 HP)',
  rows: [['SLT-15F', '15', '20', '8', '2.44', '86.16', 'DN20', '62 ± 2', 'Direct', 'Star delta', '1090×740×1065', '356'], ['SLT-15F', '15', '20', '10', '2.2', '77.68', 'DN20', '62 ± 2', 'Direct', 'Star delta', '1090×740×1065', '317'], ['SLT-15F', '15', '20', '13', '1.87', '66.03', 'DN20', '62 ± 2', 'Direct', 'Star delta', '1090×740×1065', '317'], ['SLT-15F', '15', '20', '16', '1.1', '38.84', 'DN20', '62 ± 2', 'Direct', 'Star delta', '1090×740×1065', '317']]
}, {
  label: 'SLT-18F',
  note: '(18.5 kW · 25 HP)',
  rows: [['SLT-18F', '18.5', '25', '8', '3.0', '105.93', 'DN25', '64 ± 2', 'Direct', 'Star delta', '1335×900×1170', '470'], ['SLT-18F', '18.5', '25', '10', '2.7', '95.34', 'DN25', '64 ± 2', 'Direct', 'Star delta', '1335×900×1170', '470'], ['SLT-18F', '18.5', '25', '13', '2.3', '81.21', 'DN25', '64 ± 2', 'Direct', 'Star delta', '1335×900×1170', '470'], ['SLT-18F', '18.5', '25', '16', '1.85', '65.32', 'DN25', '64 ± 2', 'Direct', 'Star delta', '1335×900×1170', '470']]
}, {
  label: 'SLT-22F',
  note: '(22 kW · 30 HP)',
  rows: [['SLT-22F', '22', '30', '8', '3.6', '127.12', 'DN25', '64 ± 2', 'Direct', 'Star delta', '1335×900×1170', '470'], ['SLT-22F', '22', '30', '10', '3.2', '112.99', 'DN25', '64 ± 2', 'Direct', 'Star delta', '1335×900×1170', '470'], ['SLT-22F', '22', '30', '13', '2.6', '91.81', 'DN25', '64 ± 2', 'Direct', 'Star delta', '1335×900×1170', '470'], ['SLT-22F', '22', '30', '16', '2.3', '81.21', 'DN25', '64 ± 2', 'Direct', 'Star delta', '1335×900×1170', '470']]
}, {
  label: 'SLT-30F',
  note: '(30 kW · 40 HP)',
  rows: [['SLT-30F', '30', '40', '8', '5.0', '176.55', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '645'], ['SLT-30F', '30', '40', '10', '4.5', '158.90', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '645'], ['SLT-30F', '30', '40', '13', '3.6', '127.12', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '615'], ['SLT-30F', '30', '40', '16', '2.94', '103.81', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '615']]
}, {
  label: 'SLT-37F',
  note: '(37 kW · 50 HP)',
  rows: [['SLT-37F', '37', '50', '8', '6.3', '222.45', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '685'], ['SLT-37F', '37', '50', '10', '5.6', '197.74', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '685'], ['SLT-37F', '37', '50', '13', '4.61', '162.78', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '685'], ['SLT-37F', '37', '50', '16', '3.4', '120.05', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '685']]
}, {
  label: 'SLT-45F',
  note: '(45 kW · 60 HP)',
  rows: [['SLT-45F', '45', '60', '8', '7.46', '263.41', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '712'], ['SLT-45F', '45', '60', '10', '6.25', '220.69', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '712'], ['SLT-45F', '45', '60', '13', '5.51', '194.56', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '712'], ['SLT-45F', '45', '60', '16', '5.22', '184.32', 'DN40', '66 ± 2', 'Direct', 'Star delta', '1510×1037×1275', '712']]
}];
function Products({
  go
}) {
  const [range, setRange] = React.useState('Sollant screw');
  const [tab, setTab] = React.useState('Sollant screw');
  const ranges = ['All', 'Sollant screw', 'Single-stage', 'Two-stage', 'Accessories'];
  const list = range === 'All' ? MODELS : MODELS.filter(m => m.range === range);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-band)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--green-400)',
      fontWeight: 'var(--weight-bold)'
    }
  }, "Products"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      marginTop: 'var(--space-3)',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Sollant Stahl screw air compressors", /*#__PURE__*/React.createElement("br", null), "and AT-series reciprocating compressors"), /*#__PURE__*/React.createElement(AngledBand, {
    tone: "solid",
    style: {
      display: 'inline-flex',
      fontSize: 'var(--text-sm)',
      marginTop: 'var(--space-6)'
    }
  }, "Your trusted compressed air partner.")), /*#__PURE__*/React.createElement("img", {
    src: B + 'assets/sollant-screw-range.png',
    alt: "Sollant Stahl SLT 15V, SLT 37V and SLT 45V screw air compressors",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xl)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y-tight) 0',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-8)'
    }
  }, ranges.map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    active: r === range,
    onClick: () => setRange(r)
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, list.map(m => /*#__PURE__*/React.createElement(ProductCard, {
    key: m.model,
    model: m.model,
    image: B + m.img,
    name: m.name,
    specs: m.specs,
    badge: m.badge,
    imageBackground: m.dark ? 'var(--navy-950)' : undefined,
    onClick: () => go('Contact')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Datasheet"
  }, "Technical specification"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Sollant screw', 'Single-stage', 'Two-stage'],
    active: tab,
    onChange: setTab
  })), tab === 'Sollant screw' ? /*#__PURE__*/React.createElement(SpecTable, {
    columns: SLT_COLUMNS,
    groups: SLT_GROUPS,
    caption: "Fixed & PM VSD speed screw air compressor range. Capacity shown at each working pressure. PM VSD (V-suffix) models share the same frames and power ratings. Specifications subject to change without prior notice."
  }) : tab === 'Single-stage' ? /*#__PURE__*/React.createElement(SpecTable, {
    columns: ['Model', 'Lpm', 'cfm', 'LxH', 'cfm', 'HP', 'kW', 'rpm', 'Cylinders', 'Litres', 'Overall (mm)', 'Weight kg'],
    groups: [{
      label: 'Single-stage',
      note: '(maximum pressure 9 kg/cm² or 128 psi)',
      rows: [['AT S03 LB', '360', '12.7', '255', '9.0', '3.0', '2.2', '550', '2', '160', '1340×535×1075', '158'], ['AT S05 LB', '606', '21.4', '442', '15.6', '5.0', '3.7', '925', '2', '220', '1590×535×1075', '197'], ['AT S07 LB', '923', '32.6', '708', '25.0', '7.5', '5.5', '690', '2', '220', '1590×625×1105', '237'], ['AT S10 LB', '1229', '43.4', '949', '33.5', '10.0', '7.5', '920', '2', '220', '1590×625×1105', '258'], ['AT S15 LB', '1860', '65.7', '1390', '49.1', '15.0', '11.0', '925', '3', '500', '1915×875×1505', '349']]
    }],
    caption: "* Free air delivery measured as per IS 5456 at working pressures \u2014 S5 models at 7 kg/cm\xB2. Available in base mounted versions also. Due to continuous engineering improvements, technical specifications are subject to change without prior notice."
  }) : /*#__PURE__*/React.createElement(SpecTable, {
    columns: ['Model', 'Lpm', 'cfm', 'LxH', 'cfm', 'HP', 'kW', 'rpm', 'Cylinders', 'Litres', 'Overall (mm)', 'Weight kg'],
    groups: [{
      label: 'Two-stage',
      note: '(maximum pressure 12 kg/cm² or 175 psi)',
      rows: [['AT T03 LB', '303', '10.7', '249', '8.8', '3.0', '2.2', '925', '2', '160', '1340×530×1075', '170'], ['AT T05 LB', '501', '17.7', '411', '14.5', '3.0', '2.2', '925', '2', '220', '1590×530×1075', '207'], ['AT T07 LB', '702', '24.8', '583', '20.6', '5.0', '3.7', '925', '2', '220', '1590×570×1085', '235'], ['AT T10 LB', '1002', '35.4', '852', '30.1', '10.0', '7.5', '750', '3', '420', '1665×875×1420', '368'], ['AT T15 LB*', '1538', '54.3', '1249', '44.1', '15.0', '11.0', '1150', '3', '500', '1915×875×1420', '408']]
    }],
    caption: "* T5 models measured at 10 kg/cm\xB2. Specifications subject to change without prior notice."
  }))));
}
Object.assign(window, {
  Products
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Products.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.FeatureTable = __ds_scope.FeatureTable;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.AngledBand = __ds_scope.AngledBand;

__ds_ns.CTABanner = __ds_scope.CTABanner;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.ValueTile = __ds_scope.ValueTile;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
