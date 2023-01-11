// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
      resource: {
          version: "4",

          macros: [
              { function: "__e" },
              {
                  function: "__gas",
                  vtp_cookieDomain: "auto",
                  vtp_doubleClick: true,
                  vtp_setTrackerName: false,
                  vtp_useDebugVersion: false,
                  vtp_useHashAutoLink: false,
                  vtp_decorateFormsAutoLink: false,
                  vtp_enableLinkId: false,
                  vtp_enableEcommerce: false,
                  vtp_trackingId: "UA-153489386-1",
                  vtp_enableRecaptchaOption: false,
                  vtp_enableTransportUrl: false,
                  vtp_enableUaRlsa: false,
                  vtp_enableUseInternalVersion: false,
              },
              { function: "__v", vtp_name: "gtm.elementClasses", vtp_dataLayerVersion: 1 },
              { function: "__u", vtp_component: "URL", vtp_enableMultiQueryKeys: false, vtp_enableIgnoreEmptyQueryParam: false },
              { function: "__u", vtp_component: "HOST", vtp_enableMultiQueryKeys: false, vtp_enableIgnoreEmptyQueryParam: false },
              { function: "__u", vtp_component: "PATH", vtp_enableMultiQueryKeys: false, vtp_enableIgnoreEmptyQueryParam: false },
              { function: "__f", vtp_component: "URL" },
              { function: "__e" },
              { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
              { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
              { function: "__v", vtp_name: "gtm.elementTarget", vtp_dataLayerVersion: 1 },
              { function: "__v", vtp_name: "gtm.elementUrl", vtp_dataLayerVersion: 1 },
              { function: "__aev", vtp_varType: "TEXT" },
          ],
          tags: [
              {
                  function: "__ua",
                  metadata: ["map"],
                  once_per_event: true,
                  vtp_overrideGaSettings: false,
                  vtp_trackType: "TRACK_PAGEVIEW",
                  vtp_gaSettings: ["macro", 1],
                  vtp_enableRecaptchaOption: false,
                  vtp_enableTransportUrl: false,
                  vtp_enableUaRlsa: false,
                  vtp_enableUseInternalVersion: false,
                  vtp_enableFirebaseCampaignData: true,
                  tag_id: 4,
              },
              {
                  function: "__ua",
                  metadata: ["map"],
                  once_per_event: true,
                  vtp_nonInteraction: false,
                  vtp_overrideGaSettings: false,
                  vtp_eventCategory: "Клик по зеленой кнопке",
                  vtp_trackType: "TRACK_EVENT",
                  vtp_gaSettings: ["macro", 1],
                  vtp_eventAction: "Click",
                  vtp_enableRecaptchaOption: false,
                  vtp_enableTransportUrl: false,
                  vtp_enableUaRlsa: false,
                  vtp_enableUseInternalVersion: false,
                  vtp_enableFirebaseCampaignData: true,
                  vtp_trackTypeIsEvent: true,
                  tag_id: 6,
              },
              {
                  function: "__ua",
                  metadata: ["map"],
                  once_per_event: true,
                  vtp_nonInteraction: false,
                  vtp_overrideGaSettings: false,
                  vtp_eventCategory: "Клик по скачать DMG",
                  vtp_trackType: "TRACK_EVENT",
                  vtp_gaSettings: ["macro", 1],
                  vtp_eventAction: "Click",
                  vtp_enableRecaptchaOption: false,
                  vtp_enableTransportUrl: false,
                  vtp_enableUaRlsa: false,
                  vtp_enableUseInternalVersion: false,
                  vtp_enableFirebaseCampaignData: true,
                  vtp_trackTypeIsEvent: true,
                  tag_id: 8,
              },
              { function: "__cl", tag_id: 9 },
              { function: "__cl", tag_id: 10 },
          ],
          predicates: [
              { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
              { function: "_cn", arg0: ["macro", 2], arg1: "button" },
              { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
              { function: "_cn", arg0: ["macro", 1], arg1: "button -dark" },
          ],
          rules: [
              [
                  ["if", 0],
                  ["add", 0, 3, 4],
              ],
              [
                  ["if", 1, 2],
                  ["add", 1],
              ],
              [
                  ["if", 2, 3],
                  ["add", 2],
              ],
          ],
      },
      runtime: [],
  };

  /*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
  var h,
      aa = function (a) {
          var b = 0;
          return function () {
              return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
          };
      },
      ba =
          "function" == typeof Object.create
              ? Object.create
              : function (a) {
                    var b = function () {};
                    b.prototype = a;
                    return new b();
                },
      ca;
  if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
  else {
      var da;
      a: {
          var ea = { a: !0 },
              fa = {};
          try {
              fa.__proto__ = ea;
              da = fa.a;
              break a;
          } catch (a) {}
          da = !1;
      }
      ca = da
          ? function (a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a;
            }
          : null;
  }
  var ha = ca,
      ja = function (a, b) {
          a.prototype = ba(b.prototype);
          a.prototype.constructor = a;
          if (ha) ha(a, b);
          else
              for (var c in b)
                  if ("prototype" != c)
                      if (Object.defineProperties) {
                          var d = Object.getOwnPropertyDescriptor(b, c);
                          d && Object.defineProperty(a, c, d);
                      } else a[c] = b[c];
          a.jk = b.prototype;
      },
      la = this || self,
      ma = function (a) {
          return a;
      };
  var na = function () {},
      pa = function (a) {
          return "function" === typeof a;
      },
      k = function (a) {
          return "string" === typeof a;
      },
      qa = function (a) {
          return "number" === typeof a && !isNaN(a);
      },
      ra = Array.isArray,
      sa = function (a, b) {
          if (a && ra(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
      },
      ta = function (a, b) {
          if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647);
          return Math.floor(Math.random() * (b - a + 1) + a);
      },
      va = function (a, b) {
          for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0);
          for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
          return !1;
      },
      A = function (a, b) {
          for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
      },
      wa = function (a) {
          return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"));
      },
      xa = function (a) {
          return Math.round(Number(a)) || 0;
      },
      za = function (a) {
          return "false" === String(a).toLowerCase() ? !1 : !!a;
      },
      Aa = function (a) {
          var b = [];
          if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
          return b;
      },
      Ba = function (a) {
          return a ? a.replace(/^\s+|\s+$/g, "") : "";
      },
      Ca = function () {
          return new Date(Date.now());
      },
      Da = function () {
          return Ca().getTime();
      },
      ua = function () {
          this.prefix = "gtm.";
          this.values = {};
      };
  ua.prototype.set = function (a, b) {
      this.values[this.prefix + a] = b;
  };
  ua.prototype.get = function (a) {
      return this.values[this.prefix + a];
  };
  var Ea = function (a, b, c) {
          return a && a.hasOwnProperty(b) ? a[b] : c;
      },
      Fa = function (a) {
          var b = a;
          return function () {
              if (b) {
                  var c = b;
                  b = void 0;
                  try {
                      c();
                  } catch (d) {}
              }
          };
      },
      Ga = function (a, b) {
          for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
      },
      Ha = function (a) {
          for (var b in a) if (a.hasOwnProperty(b)) return !0;
          return !1;
      },
      Ia = function (a, b) {
          for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
          return c;
      },
      Ja = function (a, b) {
          for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
          d[e[e.length - 1]] = b;
          return c;
      },
      La = /^\w{1,9}$/,
      Ma = function (a, b) {
          a = a || {};
          b = b || ",";
          var c = [];
          A(a, function (d, e) {
              La.test(d) && e && c.push(d);
          });
          return c.join(b);
      };
  var Na,
      Oa = function () {
          if (void 0 === Na) {
              var a = null,
                  b = la.trustedTypes;
              if (b && b.createPolicy) {
                  try {
                      a = b.createPolicy("goog#html", { createHTML: ma, createScript: ma, createScriptURL: ma });
                  } catch (c) {
                      la.console && la.console.error(c.message);
                  }
                  Na = a;
              } else Na = a;
          }
          return Na;
      };
  var Qa = function (a, b) {
      this.g = b === Pa ? a : "";
  };
  Qa.prototype.toString = function () {
      return this.g + "";
  };
  var Pa = {};
  var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Sa() {
      var a = la.navigator;
      if (a) {
          var b = a.userAgent;
          if (b) return b;
      }
      return "";
  }
  function Ta(a) {
      return -1 != Sa().indexOf(a);
  }
  var Ua = {},
      Va = function (a, b, c) {
          this.g = c === Ua ? a : "";
      };
  Va.prototype.toString = function () {
      return this.g.toString();
  };
  var Wa = function (a) {
          return a instanceof Va && a.constructor === Va ? a.g : "type_error:SafeHtml";
      },
      Xa = function (a) {
          var b = Oa(),
              c = b ? b.createHTML(a) : a;
          return new Va(c, null, Ua);
      }; /*

SPDX-License-Identifier: Apache-2.0
*/
  function Ya(a) {
      if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
      if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var H = window,
      I = document,
      Za = navigator,
      $a = I.currentScript && I.currentScript.src,
      ab = function (a, b) {
          var c = H[a];
          H[a] = void 0 === c ? b : c;
          return H[a];
      },
      bb = function (a, b) {
          b &&
              (a.addEventListener
                  ? (a.onload = b)
                  : (a.onreadystatechange = function () {
                        a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b());
                    }));
      },
      cb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
      db = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function eb(a, b, c) {
      b &&
          A(b, function (d, e) {
              d = d.toLowerCase();
              c.hasOwnProperty(d) || a.setAttribute(d, e);
          });
  }
  var fb = function (a, b, c, d) {
          var e = I.createElement("script");
          eb(e, d, cb);
          e.type = "text/javascript";
          e.async = !0;
          var f,
              g = Oa(),
              l = g ? g.createScriptURL(a) : a;
          f = new Qa(l, Pa);
          e.src = f instanceof Qa && f.constructor === Qa ? f.g : "type_error:TrustedResourceUrl";
          var m,
              n,
              p,
              q = null == (p = (n = ((e.ownerDocument && e.ownerDocument.defaultView) || window).document).querySelector) ? void 0 : p.call(n, "script[nonce]");
          (m = q ? q.nonce || q.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", m);
          bb(e, b);
          c && (e.onerror = c);
          var r = I.getElementsByTagName("script")[0] || I.body || I.head;
          r.parentNode.insertBefore(e, r);
          return e;
      },
      gb = function () {
          if ($a) {
              var a = $a.toLowerCase();
              if (0 === a.indexOf("https://")) return 2;
              if (0 === a.indexOf("http://")) return 3;
          }
          return 1;
      },
      hb = function (a, b, c, d, e) {
          var f = e,
              g = !1;
          f || ((f = I.createElement("iframe")), (g = !0));
          eb(f, c, db);
          d &&
              A(d, function (m, n) {
                  f.dataset[m] = n;
              });
          f.height = "0";
          f.width = "0";
          f.style.display = "none";
          f.style.visibility = "hidden";
          if (g) {
              var l = (I.body && I.body.lastChild) || I.body || I.head;
              l.parentNode.insertBefore(f, l);
          }
          bb(f, b);
          void 0 !== a && (f.src = a);
          return f;
      },
      ib = function (a, b, c) {
          var d = new Image(1, 1);
          d.onload = function () {
              d.onload = null;
              b && b();
          };
          d.onerror = function () {
              d.onerror = null;
              c && c();
          };
          d.src = a;
          return d;
      },
      jb = function (a, b, c, d) {
          a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
      },
      kb = function (a, b, c) {
          a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
      },
      K = function (a) {
          H.setTimeout(a, 0);
      },
      lb = function (a, b) {
          return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
      },
      mb = function (a) {
          var b = a.innerText || a.textContent || "";
          b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
          b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
          return b;
      },
      nb = function (a) {
          var b = I.createElement("div"),
              c = b,
              d = Xa("A<div>" + a + "</div>");
          void 0 !== c.tagName && Ya(c);
          c.innerHTML = d instanceof Va ? Wa(d) : Wa(d);
          b = b.lastChild;
          for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
          return e;
      },
      ob = function (a, b, c) {
          c = c || 100;
          for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
          for (var f = a, g = 0; f && g <= c; g++) {
              if (d[String(f.tagName).toLowerCase()]) return f;
              f = f.parentElement;
          }
          return null;
      },
      pb = function (a) {
          var b;
          try {
              b = Za.sendBeacon && Za.sendBeacon(a);
          } catch (c) {}
          b || ib(a);
      },
      qb = function (a, b) {
          var c = a[b];
          c && "string" === typeof c.animVal && (c = c.animVal);
          return c;
      }; /*
jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var rb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
      sb = function (a) {
          if (null == a) return String(a);
          var b = rb.exec(Object.prototype.toString.call(Object(a)));
          return b ? b[1].toLowerCase() : "object";
      },
      tb = function (a, b) {
          return Object.prototype.hasOwnProperty.call(Object(a), b);
      },
      ub = function (a) {
          if (!a || "object" != sb(a) || a.nodeType || a == a.window) return !1;
          try {
              if (a.constructor && !tb(a, "constructor") && !tb(a.constructor.prototype, "isPrototypeOf")) return !1;
          } catch (c) {
              return !1;
          }
          for (var b in a);
          return void 0 === b || tb(a, b);
      },
      N = function (a, b) {
          var c = b || ("array" == sb(a) ? [] : {}),
              d;
          for (d in a)
              if (tb(a, d)) {
                  var e = a[d];
                  "array" == sb(e) ? ("array" != sb(c[d]) && (c[d] = []), (c[d] = N(e, c[d]))) : ub(e) ? (ub(c[d]) || (c[d] = {}), (c[d] = N(e, c[d]))) : (c[d] = e);
              }
          return c;
      };
  var vb = function (a) {
      if (void 0 === a || ra(a) || ub(a)) return !0;
      switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "function":
              return !0;
      }
      return !1;
  };
  var wb = (function () {
      var a = function (b) {
          return {
              toString: function () {
                  return b;
              },
          };
      };
      return {
          xh: a("consent"),
          yh: a("consent_always_fire"),
          Bf: a("convert_case_to"),
          Cf: a("convert_false_to"),
          Df: a("convert_null_to"),
          Ef: a("convert_true_to"),
          Ff: a("convert_undefined_to"),
          Sj: a("debug_mode_metadata"),
          vb: a("function"),
          Je: a("instance_name"),
          hi: a("live_only"),
          ii: a("malware_disabled"),
          ji: a("metadata"),
          oi: a("original_activity_id"),
          Xj: a("original_vendor_template_id"),
          Wj: a("once_on_load"),
          ni: a("once_per_event"),
          jg: a("once_per_load"),
          Yj: a("priority_override"),
          Zj: a("respected_consent_types"),
          og: a("setup_tags"),
          qg: a("tag_id"),
          rg: a("teardown_tags"),
      };
  })();
  var Ub;
  var Vb = [],
      Wb = [],
      Xb = [],
      Yb = [],
      Zb = [],
      $b = {},
      ac,
      bc,
      cc,
      dc = function (a, b) {
          var c = a["function"],
              d = b && b.event;
          if (!c) throw Error("Error: No function name given for function call.");
          var e = $b[c],
              f = {},
              g;
          for (g in a)
              if (a.hasOwnProperty(g))
                  if (0 === g.indexOf("vtp_")) e && d && d.Gg && d.Gg(a[g]), (f[void 0 !== e ? g : g.substr(4)] = a[g]);
                  else if (g === wb.yh.toString() && a[g]) {
                  }
          e && d && d.Fg && (f.vtp_gtmCachedValues = d.Fg);
          if (b) {
              if (null == b.name) {
                  var l;
                  a: {
                      var m = b.index;
                      if (null == m) l = "";
                      else {
                          var n;
                          switch (b.type) {
                              case 2:
                                  n = Vb[m];
                                  break;
                              case 1:
                                  n = Yb[m];
                                  break;
                              default:
                                  l = "";
                                  break a;
                          }
                          var p = n && n[wb.Je];
                          l = p ? String(p) : "";
                      }
                  }
                  b.name = l;
              }
              e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
          }
          return void 0 !== e ? e(f) : Ub(c, f, b);
      },
      gc = function (a, b, c) {
          c = c || [];
          var d = {},
              e;
          for (e in a) a.hasOwnProperty(e) && (d[e] = fc(a[e], b, c));
          return d;
      },
      fc = function (a, b, c) {
          if (ra(a)) {
              var d;
              switch (a[0]) {
                  case "function_id":
                      return a[1];
                  case "list":
                      d = [];
                      for (var e = 1; e < a.length; e++) d.push(fc(a[e], b, c));
                      return d;
                  case "macro":
                      var f = a[1];
                      if (c[f]) return;
                      var g = Vb[f];
                      if (!g || b.bf(g)) return;
                      c[f] = !0;
                      var l = String(g[wb.Je]);
                      try {
                          var m = gc(g, b, c);
                          m.vtp_gtmEventId = b.id;
                          b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                          d = dc(m, { event: b, index: f, type: 2, name: l });
                          cc && (d = cc.Di(d, m));
                      } catch (w) {
                          b.Yg && b.Yg(w, Number(f), l), (d = !1);
                      }
                      c[f] = !1;
                      return d;
                  case "map":
                      d = {};
                      for (var n = 1; n < a.length; n += 2) d[fc(a[n], b, c)] = fc(a[n + 1], b, c);
                      return d;
                  case "template":
                      d = [];
                      for (var p = !1, q = 1; q < a.length; q++) {
                          var r = fc(a[q], b, c);
                          bc && (p = p || r === bc.Ad);
                          d.push(r);
                      }
                      return bc && p ? bc.Hi(d) : d.join("");
                  case "escape":
                      d = fc(a[1], b, c);
                      if (bc && ra(a[1]) && "macro" === a[1][0] && bc.$i(a)) return bc.rj(d);
                      d = String(d);
                      for (var t = 2; t < a.length; t++) xb[a[t]] && (d = xb[a[t]](d));
                      return d;
                  case "tag":
                      var u = a[1];
                      if (!Yb[u]) throw Error("Unable to resolve tag reference " + u + ".");
                      return (d = { Ng: a[2], index: u });
                  case "zb":
                      var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                      v["function"] = a[1];
                      var y = hc(v, b, c),
                          x = !!a[4];
                      return x || 2 !== y ? x !== (1 === y) : null;
                  default:
                      throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
              }
          }
          return a;
      },
      hc = function (a, b, c) {
          try {
              return ac(gc(a, b, c));
          } catch (d) {
              JSON.stringify(a);
          }
          return 2;
      };
  var kc = function (a) {
          function b(r) {
              for (var t = 0; t < r.length; t++) d[r[t]] = !0;
          }
          for (var c = [], d = [], e = ic(a), f = 0; f < Wb.length; f++) {
              var g = Wb[f],
                  l = jc(g, e);
              if (l) {
                  for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                  b(g.block || []);
              } else null === l && b(g.block || []);
          }
          for (var p = [], q = 0; q < Yb.length; q++) c[q] && !d[q] && (p[q] = !0);
          return p;
      },
      jc = function (a, b) {
          for (var c = a["if"] || [], d = 0; d < c.length; d++) {
              var e = b(c[d]);
              if (0 === e) return !1;
              if (2 === e) return null;
          }
          for (var f = a.unless || [], g = 0; g < f.length; g++) {
              var l = b(f[g]);
              if (2 === l) return null;
              if (1 === l) return !1;
          }
          return !0;
      },
      ic = function (a) {
          var b = [];
          return function (c) {
              void 0 === b[c] && (b[c] = hc(Xb[c], a));
              return b[c];
          };
      };
  var lc = {
      Di: function (a, b) {
          b[wb.Bf] && "string" === typeof a && (a = 1 == b[wb.Bf] ? a.toLowerCase() : a.toUpperCase());
          b.hasOwnProperty(wb.Df) && null === a && (a = b[wb.Df]);
          b.hasOwnProperty(wb.Ff) && void 0 === a && (a = b[wb.Ff]);
          b.hasOwnProperty(wb.Ef) && !0 === a && (a = b[wb.Ef]);
          b.hasOwnProperty(wb.Cf) && !1 === a && (a = b[wb.Cf]);
          return a;
      },
  };

  var Q = {
      ub: "_ee",
      Kc: "_syn_or_mod",
      Kb: "_def",
      $j: "_uei",
      bk: "_upi",
      Wb: "_eu",
      ig: "_is_passthrough_cid",
      hg: "_is_linker_valid",
      Me: "_ntg",
      Dd: "_nge",
      gg: "_ipe",
      Sb: "event_callback",
      nd: "event_timeout",
      za: "gtag.config",
      Ga: "gtag.get",
      xa: "purchase",
      Ob: "refund",
      ob: "begin_checkout",
      Lb: "add_to_cart",
      Mb: "remove_from_cart",
      Hh: "view_cart",
      Hf: "add_to_wishlist",
      ya: "view_item",
      Nb: "view_promotion",
      he: "select_promotion",
      fe: "select_item",
      pb: "view_item_list",
      Gf: "add_payment_info",
      Gh: "add_shipping_info",
      Ia: "value_key",
      Qa: "value_callback",
      U: "allow_ad_personalization_signals",
      Fc: "restricted_data_processing",
      sc: "allow_google_signals",
      oa: "cookie_expires",
      rb: "cookie_update",
      Gc: "session_duration",
      ud: "session_engaged_time",
      ld: "engagement_time_msec",
      Ka: "user_properties",
      V: "transport_url",
      aa: "ads_data_redaction",
      qa: "user_data",
      Bc: "first_party_collection",
      D: "ad_storage",
      M: "analytics_storage",
      zf: "region",
      Af: "wait_for_update",
      ja: "conversion_linker",
      Aa: "conversion_cookie_prefix",
      fa: "value",
      da: "currency",
      bg: "trip_type",
      X: "items",
      Uf: "passengers",
      jd: "allow_custom_scripts",
      hb: "session_id",
      Ce: "quantity",
      Sa: "transaction_id",
      Ra: "language",
      Qb: "country",
      kd: "allow_enhanced_conversions",
      pe: "aw_merchant_id",
      ne: "aw_feed_country",
      oe: "aw_feed_language",
      me: "discount",
      N: "developer_id",
      Rf: "global_developer_id_string",
      Pf: "event_developer_id_string",
      vd: "delivery_postal_code",
      we: "estimated_delivery_date",
      ue: "shipping",
      Ae: "new_customer",
      qe: "customer_lifetime_value",
      ve: "enhanced_conversions",
      qc: "page_view",
      la: "linker",
      O: "domains",
      Ub: "decorate_forms",
      Of: "enhanced_conversions_automatic_settings",
      Oh: "auto_detection_enabled",
      ye: "ga_temp_client_id",
      ie: "user_engagement",
      Bh: "app_remove",
      Ch: "app_store_refund",
      Dh: "app_store_subscription_cancel",
      Eh: "app_store_subscription_convert",
      Fh: "app_store_subscription_renew",
      Ih: "first_open",
      Jh: "first_visit",
      Kh: "in_app_purchase",
      Lh: "session_start",
      Mh: "allow_display_features",
      Pa: "campaign",
      uc: "campaign_content",
      vc: "campaign_id",
      wc: "campaign_medium",
      xc: "campaign_name",
      yc: "campaign_source",
      zc: "campaign_term",
      na: "client_id",
      ka: "cookie_domain",
      Pb: "cookie_name",
      $a: "cookie_path",
      Ha: "cookie_flags",
      Rb: "custom_map",
      qd: "groups",
      Tf: "non_interaction",
      eb: "page_location",
      Be: "page_path",
      fb: "page_referrer",
      rd: "page_title",
      Ca: "send_page_view",
      tb: "send_to",
      Hc: "session_engaged",
      Ac: "euid_logged_in_state",
      Ic: "session_number",
      bi: "tracking_id",
      Ta: "url_passthrough",
      Tb: "accept_incoming",
      Ec: "url_position",
      Xf: "phone_conversion_number",
      Vf: "phone_conversion_callback",
      Wf: "phone_conversion_css_class",
      Yf: "phone_conversion_options",
      Xh: "phone_conversion_ids",
      Wh: "phone_conversion_country_code",
      qb: "aw_remarketing",
      ke: "aw_remarketing_only",
      je: "gclid",
      Nh: "auid",
      Rh: "affiliation",
      Nf: "tax",
      te: "list_name",
      Mf: "checkout_step",
      Lf: "checkout_option",
      Sh: "coupon",
      Th: "promotions",
      Ja: "user_id",
      $h: "retoken",
      Ba: "cookie_prefix",
      If: "disable_merchant_reported_purchases",
      Kf: "dc_natural_search",
      Jf: "dc_custom_params",
      Sf: "method",
      ai: "search_term",
      Qh: "content_type",
      Vh: "optimize_id",
      Uh: "experiments",
      cb: "google_signals",
  };
  Q.pd = "google_tld";
  Q.xd = "update";
  Q.xe = "firebase_id";
  Q.Cc = "ga_restrict_domain";
  Q.md = "event_settings";
  Q.se = "dynamic_event_settings";
  Q.Vb = "user_data_settings";
  Q.$f = "screen_name";
  Q.Ee = "screen_resolution";
  Q.sb = "_x_19";
  Q.ab = "enhanced_client_id";
  Q.od = "_x_20";
  Q.ze = "internal_traffic_results";
  Q.wd = "traffic_type";
  Q.sd = "referral_exclusion_definition";
  Q.Dc = "ignore_referrer";
  Q.Ph = "content_group";
  Q.ma = "allow_interest_groups";
  (Q.De = "redact_device_info"), (Q.Qf = "geo_granularity");
  var Lc = {};
  Q.eg = Object.freeze(
      ((Lc[Q.Gf] = 1), (Lc[Q.Gh] = 1), (Lc[Q.Lb] = 1), (Lc[Q.Mb] = 1), (Lc[Q.Hh] = 1), (Lc[Q.ob] = 1), (Lc[Q.fe] = 1), (Lc[Q.pb] = 1), (Lc[Q.he] = 1), (Lc[Q.Nb] = 1), (Lc[Q.xa] = 1), (Lc[Q.Ob] = 1), (Lc[Q.ya] = 1), (Lc[Q.Hf] = 1), Lc)
  );
  Q.Ge = Object.freeze([Q.U, Q.sc, Q.rb]);
  Q.li = Object.freeze([].concat(Q.Ge));
  Q.He = Object.freeze([Q.oa, Q.nd, Q.Gc, Q.ud, Q.ld]);
  Q.mi = Object.freeze([].concat(Q.He));
  var Mc = {};
  Q.de = ((Mc[Q.D] = "1"), (Mc[Q.M] = "2"), Mc);
  var Oc = { Gi: "RU", yj: "RU-VGG" };
  var Pc = {},
      Qc = function (a, b) {
          Pc[a] = Pc[a] || [];
          Pc[a][b] = !0;
      },
      Rc = function (a) {
          for (var b = [], c = Pc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
          for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
          return b.join("");
      },
      Sc = function () {
          for (var a = [], b = Pc.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
          return 0 < a.length ? a : void 0;
      };
  var R = function (a) {
      Qc("GTM", a);
  };
  var Tc = new (function (a, b) {
      this.g = a;
      this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Vc = function () {
      var a = Uc,
          b = "$e";
      if (a.$e && a.hasOwnProperty(b)) return a.$e;
      var c = new a();
      a.$e = c;
      a.hasOwnProperty(b);
      return c;
  };
  var Uc = function () {
      var a = {};
      this.g = function () {
          var b = Tc.g,
              c = Tc.defaultValue;
          return null != a[b] ? a[b] : c;
      };
      this.o = function () {
          a[Tc.g] = !0;
      };
  };
  var Wc = [];
  function Xc() {
      var a = ab("google_tag_data", {});
      a.ics || (a.ics = { entries: {}, set: Yc, update: Zc, addListener: bd, notifyListeners: cd, active: !1, usedDefault: !1, usedUpdate: !1, accessedDefault: !1, accessedAny: !1, wasSetLate: !1 });
      return a.ics;
  }
  function Yc(a, b, c, d, e, f) {
      var g = Xc();
      g.usedDefault || (!g.accessedDefault && !g.accessedAny) || (g.wasSetLate = !0);
      g.active = !0;
      g.usedDefault = !0;
      if (void 0 != b) {
          var l = g.entries,
              m = l[a] || {},
              n = m.region,
              p = c && k(c) ? c.toUpperCase() : void 0;
          d = d.toUpperCase();
          e = e.toUpperCase();
          if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
              var q = !!(f && 0 < f && void 0 === m.update),
                  r = { region: p, initial: "granted" === b, update: m.update, quiet: q };
              if ("" !== d || !1 !== m.initial) l[a] = r;
              q &&
                  H.setTimeout(function () {
                      l[a] === r && r.quiet && ((r.quiet = !1), dd(a), cd(), Qc("TAGGING", 2));
                  }, f);
          }
      }
  }
  function Zc(a, b) {
      var c = Xc();
      c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
      c.active = !0;
      c.usedUpdate = !0;
      if (void 0 != b) {
          var d = ed(c, a),
              e = c.entries,
              f = (e[a] = e[a] || {});
          f.update = "granted" === b;
          var g = ed(c, a);
          f.quiet ? ((f.quiet = !1), dd(a)) : g !== d && dd(a);
      }
  }
  function bd(a, b) {
      Wc.push({ Ue: a, Oi: b });
  }
  function dd(a) {
      for (var b = 0; b < Wc.length; ++b) {
          var c = Wc[b];
          ra(c.Ue) && -1 !== c.Ue.indexOf(a) && (c.dh = !0);
      }
  }
  function cd(a, b) {
      for (var c = 0; c < Wc.length; ++c) {
          var d = Wc[c];
          if (d.dh) {
              d.dh = !1;
              try {
                  d.Oi({ consentEventId: a, consentPriorityId: b });
              } catch (e) {}
          }
      }
  }
  function ed(a, b) {
      var c = a.entries[b] || {};
      return void 0 !== c.update ? c.update : c.initial;
  }
  var fd = function (a) {
          var b = Xc();
          b.accessedAny = !0;
          return ed(b, a);
      },
      gd = function (a) {
          var b = Xc();
          b.accessedDefault = !0;
          return (b.entries[a] || {}).initial;
      },
      hd = function (a) {
          var b = Xc();
          b.accessedAny = !0;
          return !(b.entries[a] || {}).quiet;
      },
      id = function () {
          if (!Vc().g()) return !1;
          var a = Xc();
          a.accessedAny = !0;
          return a.active;
      },
      jd = function () {
          var a = Xc();
          a.accessedDefault = !0;
          return a.usedDefault;
      },
      kd = function (a, b) {
          Xc().addListener(a, b);
      },
      ld = function (a, b) {
          Xc().notifyListeners(a, b);
      },
      md = function (a, b) {
          function c() {
              for (var e = 0; e < b.length; e++) if (!hd(b[e])) return !0;
              return !1;
          }
          if (c()) {
              var d = !1;
              kd(b, function (e) {
                  d || c() || ((d = !0), a(e));
              });
          } else a({});
      },
      nd = function (a, b) {
          function c() {
              for (var f = [], g = 0; g < d.length; g++) {
                  var l = d[g];
                  !1 === fd(l) || e[l] || (f.push(l), (e[l] = !0));
              }
              return f;
          }
          var d = k(b) ? [b] : b,
              e = {};
          c().length !== d.length &&
              kd(d, function (f) {
                  var g = c();
                  0 < g.length && ((f.Ue = g), a(f));
              });
      };
  function od() {}
  function pd() {}
  function qd(a) {
      for (var b = [], c = 0; c < rd.length; c++) {
          var d = a(rd[c]);
          b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
      }
      return b.join("");
  }
  var rd = [Q.D, Q.M],
      sd = function (a) {
          var b = a[Q.zf];
          b && R(40);
          var c = a[Q.Af];
          c && R(41);
          for (var d = ra(b) ? b : [b], e = { jc: 0 }; e.jc < d.length; e = { jc: e.jc }, ++e.jc)
              A(
                  a,
                  (function (f) {
                      return function (g, l) {
                          if (g !== Q.zf && g !== Q.Af) {
                              var m = d[f.jc],
                                  n = Oc.Gi,
                                  p = Oc.yj;
                              Xc().set(g, l, m, n, p, c);
                          }
                      };
                  })(e)
              );
      },
      td = 0,
      ud = function (a, b) {
          A(a, function (e, f) {
              Xc().update(e, f);
          });
          ld(b.eventId, b.priorityId);
          var c = Da(),
              d = c - td;
          td && 0 <= d && 1e3 > d && R(66);
          td = c;
      },
      vd = function (a) {
          var b = fd(a);
          return void 0 != b ? b : !0;
      },
      wd = function () {
          return "G1" + qd(fd);
      },
      xd = function (a, b) {
          nd(a, b);
      },
      yd = function (a, b) {
          md(a, b);
      };
  var Ad = function (a) {
          return zd ? I.querySelectorAll(a) : null;
      },
      Bd = function (a, b) {
          if (!zd) return null;
          if (Element.prototype.closest)
              try {
                  return a.closest(b);
              } catch (e) {
                  return null;
              }
          var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
              d = a;
          if (!I.documentElement.contains(d)) return null;
          do {
              try {
                  if (c.call(d, b)) return d;
              } catch (e) {
                  break;
              }
              d = d.parentElement || d.parentNode;
          } while (null !== d && 1 === d.nodeType);
          return null;
      },
      Cd = !1;
  if (I.querySelectorAll)
      try {
          var Dd = I.querySelectorAll(":root");
          Dd && 1 == Dd.length && Dd[0] == I.documentElement && (Cd = !0);
      } catch (a) {}
  var zd = Cd;
  var Yd = {},
      T = (H.google_tag_manager = H.google_tag_manager || {}),
      Zd = Math.random();
  Yd.Hd = "5b0";
  Yd.Z = "dataLayer";
  Yd.Ah = "ChAI8NWXlAYQm4SC1tqOrppgEiQAtMGJDrYsabYPsT8KfFWK1TUZ12rIc1YHXOo8ZGv56wGoQBQaAqJm";
  var $d = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 },
      ae = { __paused: !0, __tg: !0 },
      be;
  for (be in $d) $d.hasOwnProperty(be) && (ae[be] = !0);
  Yd.oc = "www.googletagmanager.com";
  var ce,
      de = Yd.oc + "/gtm.js";
  ce = de;
  var ee = za(""),
      fe = null,
      ge = null,
      he = {},
      ie = {},
      je = function () {
          var a = T.sequence || 1;
          T.sequence = a + 1;
          return a;
      };
  Yd.zh = "";
  var ke = "";
  Yd.Id = ke;
  var le = new ua(),
      me = {},
      ne = {},
      qe = {
          name: Yd.Z,
          set: function (a, b) {
              N(Ja(a, b), me);
              oe();
          },
          get: function (a) {
              return pe(a, 2);
          },
          reset: function () {
              le = new ua();
              me = {};
              oe();
          },
      },
      pe = function (a, b) {
          return 2 != b ? le.get(a) : re(a);
      },
      re = function (a) {
          var b,
              c = a.split(".");
          b = b || [];
          for (var d = me, e = 0; e < c.length; e++) {
              if (null === d) return !1;
              if (void 0 === d) break;
              d = d[c[e]];
              if (-1 !== b.indexOf(d)) return;
          }
          return d;
      },
      se = function (a, b) {
          ne.hasOwnProperty(a) || (le.set(a, b), N(Ja(a, b), me), oe());
      },
      oe = function (a) {
          A(ne, function (b, c) {
              le.set(b, c);
              N(Ja(b), me);
              N(Ja(b, c), me);
              a && delete ne[b];
          });
      },
      te = function (a, b) {
          var c,
              d = 1 !== (void 0 === b ? 2 : b) ? re(a) : le.get(a);
          "array" === sb(d) || "object" === sb(d) ? (c = N(d)) : (c = d);
          return c;
      };
  var ue,
      ve = !1,
      we = function (a) {
          if (!ve) {
              ve = !0;
              ue = ue || {};
          }
          return ue[a];
      };
  var xe = function (a) {
      if (I.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !H.getComputedStyle) return !0;
      var c = H.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
          if ("none" === e.display) return !0;
          var f = e.opacity,
              g = e.filter;
          if (g) {
              var l = g.indexOf("opacity(");
              0 <= l && ((g = g.substring(l + 8, g.indexOf(")", l))), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), (f = Math.min(g, f)));
          }
          if (void 0 !== f && 0 >= f) return !0;
          (d = d.parentElement) && (e = H.getComputedStyle(d, null));
      }
      return !1;
  };
  var Ke = /:[0-9]+$/,
      Le = function (a, b, c) {
          for (var d = a.split("&"), e = 0; e < d.length; e++) {
              var f = d[e].split("=");
              if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                  var g = f.slice(1).join("=");
                  return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
              }
          }
      },
      Oe = function (a, b, c, d, e) {
          b && (b = String(b).toLowerCase());
          if ("protocol" === b || "port" === b) a.protocol = Me(a.protocol) || Me(H.location.protocol);
          "port" === b
              ? (a.port = String(Number(a.hostname ? a.port : H.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")))
              : "host" === b && (a.hostname = (a.hostname || H.location.hostname).replace(Ke, "").toLowerCase());
          return Ne(a, b, c, d, e);
      },
      Ne = function (a, b, c, d, e) {
          var f,
              g = Me(a.protocol);
          b && (b = String(b).toLowerCase());
          switch (b) {
              case "url_no_fragment":
                  f = Pe(a);
                  break;
              case "protocol":
                  f = g;
                  break;
              case "host":
                  f = a.hostname.replace(Ke, "").toLowerCase();
                  if (c) {
                      var l = /^www\d*\./.exec(f);
                      l && l[0] && (f = f.substr(l[0].length));
                  }
                  break;
              case "port":
                  f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                  break;
              case "path":
                  a.pathname || a.hostname || Qc("TAGGING", 1);
                  f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                  var m = f.split("/");
                  0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                  f = m.join("/");
                  break;
              case "query":
                  f = a.search.replace("?", "");
                  e && (f = Le(f, e));
                  break;
              case "extension":
                  var n = a.pathname.split(".");
                  f = 1 < n.length ? n[n.length - 1] : "";
                  f = f.split("/")[0];
                  break;
              case "fragment":
                  f = a.hash.replace("#", "");
                  break;
              default:
                  f = a && a.href;
          }
          return f;
      },
      Me = function (a) {
          return a ? a.replace(":", "").toLowerCase() : "";
      },
      Pe = function (a) {
          var b = "";
          if (a && a.href) {
              var c = a.href.indexOf("#");
              b = 0 > c ? a.href : a.href.substr(0, c);
          }
          return b;
      },
      Qe = function (a) {
          var b = I.createElement("a");
          a && (b.href = a);
          var c = b.pathname;
          "/" !== c[0] && (a || Qc("TAGGING", 1), (c = "/" + c));
          var d = b.hostname.replace(Ke, "");
          return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port };
      },
      Re = function (a) {
          function b(n) {
              var p = n.split("=")[0];
              return 0 > d.indexOf(p) ? n : p + "=0";
          }
          function c(n) {
              return n
                  .split("&")
                  .map(b)
                  .filter(function (p) {
                      return void 0 !== p;
                  })
                  .join("&");
          }
          var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
              e = Qe(a),
              f = a.split(/[?#]/)[0],
              g = e.search,
              l = e.hash;
          "?" === g[0] && (g = g.substring(1));
          "#" === l[0] && (l = l.substring(1));
          g = c(g);
          l = c(l);
          "" !== g && (g = "?" + g);
          "" !== l && (l = "#" + l);
          var m = "" + f + g + l;
          "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
          return m;
      };
  var Se = {};
  var lf = {},
      mf = function (a, b) {
          if (H._gtmexpgrp && H._gtmexpgrp.hasOwnProperty(a)) return H._gtmexpgrp[a];
          void 0 === lf[a] && (lf[a] = Math.floor(Math.random() * b));
          return lf[a];
      };
  var nf = function (a) {
      var b = 1,
          c,
          d,
          e;
      if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) (e = a.charCodeAt(d)), (b = ((b << 6) & 268435455) + e + (e << 14)), (c = b & 266338304), (b = 0 !== c ? b ^ (c >> 21) : b);
      return b;
  };
  var of = function (a, b, c) {
      for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
          var g = e[f].split("="),
              l = g[0].replace(/^\s*|\s*$/g, "");
          if (l && l == a) {
              var m = g
                  .slice(1)
                  .join("=")
                  .replace(/^\s*|\s*$/g, "");
              m && c && (m = decodeURIComponent(m));
              d.push(m);
          }
      }
      return d;
  };
  var pf = function (a, b) {
          var c = function () {};
          c.prototype = a.prototype;
          var d = new c();
          a.apply(d, Array.prototype.slice.call(arguments, 1));
          return d;
      },
      qf = function (a) {
          var b = a;
          return function () {
              if (b) {
                  var c = b;
                  b = null;
                  c();
              }
          };
      };
  function rf(a) {
      return "null" !== a.origin;
  }
  var uf = function (a, b, c, d) {
          return sf(d) ? of(a, String(b || tf()), c) : [];
      },
      xf = function (a, b, c, d, e) {
          if (sf(e)) {
              var f = vf(a, d, e);
              if (1 === f.length) return f[0].id;
              if (0 !== f.length) {
                  f = wf(
                      f,
                      function (g) {
                          return g.Pd;
                      },
                      b
                  );
                  if (1 === f.length) return f[0].id;
                  f = wf(
                      f,
                      function (g) {
                          return g.Wc;
                      },
                      c
                  );
                  return f[0] ? f[0].id : void 0;
              }
          }
      };
  function yf(a, b, c, d) {
      var e = tf(),
          f = window;
      rf(f) && (f.document.cookie = a);
      var g = tf();
      return e != g || (void 0 != c && 0 <= uf(b, g, !1, d).indexOf(c));
  }
  var Cf = function (a, b, c) {
          function d(t, u, v) {
              if (null == v) return delete g[u], t;
              g[u] = v;
              return t + "; " + u + "=" + v;
          }
          function e(t, u) {
              if (null == u) return delete g[u], t;
              g[u] = !0;
              return t + "; " + u;
          }
          if (!sf(c.Va)) return 2;
          var f;
          void 0 == b ? (f = a + "=deleted; expires=" + new Date(0).toUTCString()) : (c.encode && (b = encodeURIComponent(b)), (b = zf(b)), (f = a + "=" + b));
          var g = {};
          f = d(f, "path", c.path);
          var l;
          c.expires instanceof Date ? (l = c.expires.toUTCString()) : null != c.expires && (l = "" + c.expires);
          f = d(f, "expires", l);
          f = d(f, "max-age", c.fk);
          f = d(f, "samesite", c.hk);
          c.ik && (f = e(f, "secure"));
          var m = c.domain;
          if (m && "auto" === m.toLowerCase()) {
              for (var n = Af(), p = 0; p < n.length; ++p) {
                  var q = "none" !== n[p] ? n[p] : void 0,
                      r = d(f, "domain", q);
                  r = e(r, c.flags);
                  if (!Bf(q, c.path) && yf(r, a, b, c.Va)) return 0;
              }
              return 1;
          }
          m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
          f = e(f, c.flags);
          return Bf(m, c.path) ? 1 : yf(f, a, b, c.Va) ? 0 : 1;
      },
      Df = function (a, b, c) {
          null == c.path && (c.path = "/");
          c.domain || (c.domain = "auto");
          return Cf(a, b, c);
      };
  function wf(a, b, c) {
      for (var d = [], e = [], f, g = 0; g < a.length; g++) {
          var l = a[g],
              m = b(l);
          m === c ? d.push(l) : void 0 === f || m < f ? ((e = [l]), (f = m)) : m === f && e.push(l);
      }
      return 0 < d.length ? d : e;
  }
  function vf(a, b, c) {
      for (var d = [], e = uf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
          var g = e[f].split("."),
              l = g.shift();
          if (!b || -1 !== b.indexOf(l)) {
              var m = g.shift();
              m && ((m = m.split("-")), d.push({ id: g.join("."), Pd: 1 * m[0] || 1, Wc: 1 * m[1] || 1 }));
          }
      }
      return d;
  }
  var zf = function (a) {
          a && 1200 < a.length && (a = a.substring(0, 1200));
          return a;
      },
      Ef = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
      Ff = /(^|\.)doubleclick\.net$/i,
      Bf = function (a, b) {
          return Ff.test(window.document.location.hostname) || ("/" === b && Ef.test(a));
      },
      tf = function () {
          return rf(window) ? window.document.cookie : "";
      },
      Af = function () {
          var a = [],
              b = window.document.location.hostname.split(".");
          if (4 === b.length) {
              var c = b[b.length - 1];
              if (parseInt(c, 10).toString() === c) return ["none"];
          }
          for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
          var e = window.document.location.hostname;
          Ff.test(e) || Ef.test(e) || a.push("none");
          return a;
      },
      sf = function (a) {
          if (!Vc().g() || !a || !id()) return !0;
          if (!hd(a)) return !1;
          var b = fd(a);
          return null == b ? !0 : !!b;
      };
  var Gf = function (a) {
          var b = Math.round(2147483647 * Math.random());
          return a ? String(b ^ (nf(a) & 2147483647)) : String(b);
      },
      Hf = function (a) {
          return [Gf(a), Math.round(Da() / 1e3)].join(".");
      },
      Kf = function (a, b, c, d, e) {
          var f = If(b);
          return xf(a, f, Jf(c), d, e);
      },
      Lf = function (a, b, c, d) {
          var e = "" + If(c),
              f = Jf(d);
          1 < f && (e += "-" + f);
          return [b, e, a].join(".");
      },
      If = function (a) {
          if (!a) return 1;
          a = 0 === a.indexOf(".") ? a.substr(1) : a;
          return a.split(".").length;
      },
      Jf = function (a) {
          if (!a || "/" === a) return 1;
          "/" !== a[0] && (a = "/" + a);
          "/" !== a[a.length - 1] && (a += "/");
          return a.split("/").length - 1;
      };
  function Mf(a, b, c) {
      var d,
          e = Number(null != a.lb ? a.lb : void 0);
      0 !== e && (d = new Date((b || Da()) + 1e3 * (e || 7776e3)));
      return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d };
  }
  var Nf = ["1"],
      Of = {},
      Pf = {},
      Rf = function (a) {
          return Of[Qf(a)];
      },
      Uf = function (a, b) {
          b = void 0 === b ? !0 : b;
          var c = Qf(a.prefix);
          if (!Of[c] && !Sf(c, a.path, a.domain) && b) {
              var d = Qf(a.prefix),
                  e = Hf();
              if (0 === Tf(d, e, a)) {
                  var f = ab("google_tag_data", {});
                  f._gcl_au ? Qc("GTM", 57) : (f._gcl_au = e);
              }
              Sf(c, a.path, a.domain);
          }
      };
  function Tf(a, b, c, d) {
      var e = Lf(b, "1", c.domain, c.path),
          f = Mf(c, d);
      f.Va = "ad_storage";
      return Df(a, e, f);
  }
  function Sf(a, b, c) {
      var d = Kf(a, b, c, Nf, "ad_storage");
      if (!d) return !1;
      var e = d.split(".");
      5 === e.length ? ((Of[a] = e.slice(0, 2).join(".")), (Pf[a] = { id: e.slice(2, 4).join("."), Xg: Number(e[4]) || 0 })) : 3 === e.length ? (Pf[a] = { id: e.slice(0, 2).join("."), Xg: Number(e[2]) || 0 }) : (Of[a] = d);
      return !0;
  }
  function Qf(a) {
      return (a || "_gcl") + "_au";
  }
  var Vf = function (a) {
      for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
          var f = c[e].match(d);
          f && b.push({ uf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 });
      }
      b.sort(function (g, l) {
          return l.timestamp - g.timestamp;
      });
      return b;
  };
  function Wf(a, b) {
      var c = Vf(a),
          d = {};
      if (!c || !c.length) return d;
      for (var e = 0; e < c.length; e++) {
          var f = c[e].value.split(".");
          if (!("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
              d[c[e].uf] || (d[c[e].uf] = []);
              var g = { version: f[0], timestamp: 1e3 * Number(f[1]), Da: f[2] };
              b && 3 < f.length && (g.labels = f.slice(3));
              d[c[e].uf].push(g);
          }
      }
      return d;
  }
  function Xf() {
      for (var a = Yf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
      return b;
  }
  function Zf() {
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      a += a.toLowerCase() + "0123456789-_";
      return a + ".";
  }
  var Yf, $f;
  function ag(a) {
      function b(m) {
          for (; d < a.length; ) {
              var n = a.charAt(d++),
                  p = $f[n];
              if (null != p) return p;
              if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
          }
          return m;
      }
      Yf = Yf || Zf();
      $f = $f || Xf();
      for (var c = "", d = 0; ; ) {
          var e = b(-1),
              f = b(0),
              g = b(64),
              l = b(64);
          if (64 === l && -1 === e) return c;
          c += String.fromCharCode((e << 2) | (f >> 4));
          64 != g && ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))), 64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
      }
  }
  var bg;
  var fg = function () {
          var a = cg,
              b = dg,
              c = eg(),
              d = function (g) {
                  a(g.target || g.srcElement || {});
              },
              e = function (g) {
                  b(g.target || g.srcElement || {});
              };
          if (!c.init) {
              jb(I, "mousedown", d);
              jb(I, "keyup", d);
              jb(I, "submit", e);
              var f = HTMLFormElement.prototype.submit;
              HTMLFormElement.prototype.submit = function () {
                  b(this);
                  f.call(this);
              };
              c.init = !0;
          }
      },
      gg = function (a, b, c, d, e) {
          var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
          eg().decorators.push(f);
      },
      hg = function (a, b, c) {
          for (var d = eg().decorators, e = {}, f = 0; f < d.length; ++f) {
              var g = d[f],
                  l;
              if ((l = !c || g.forms))
                  a: {
                      var m = g.domains,
                          n = a,
                          p = !!g.sameHost;
                      if (m && (p || n !== I.location.hostname))
                          for (var q = 0; q < m.length; q++)
                              if (m[q] instanceof RegExp) {
                                  if (m[q].test(n)) {
                                      l = !0;
                                      break a;
                                  }
                              } else if (0 <= n.indexOf(m[q]) || (p && 0 <= m[q].indexOf(n))) {
                                  l = !0;
                                  break a;
                              }
                      l = !1;
                  }
              if (l) {
                  var r = g.placement;
                  void 0 == r && (r = g.fragment ? 2 : 1);
                  r === b && Ga(e, g.callback());
              }
          }
          return e;
      };
  function eg() {
      var a = ab("google_tag_data", {}),
          b = a.gl;
      (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
      return b;
  }
  var ig = /(.*?)\*(.*?)\*(.*)/,
      jg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
      kg = /^(?:www\.|m\.|amp\.)+/,
      lg = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function mg(a) {
      return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var og = function (a) {
      var b = [],
          c;
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                  b.push(c);
                  var e = b,
                      f = e.push,
                      g,
                      l = String(d);
                  Yf = Yf || Zf();
                  $f = $f || Xf();
                  for (var m = [], n = 0; n < l.length; n += 3) {
                      var p = n + 1 < l.length,
                          q = n + 2 < l.length,
                          r = l.charCodeAt(n),
                          t = p ? l.charCodeAt(n + 1) : 0,
                          u = q ? l.charCodeAt(n + 2) : 0,
                          v = r >> 2,
                          y = ((r & 3) << 4) | (t >> 4),
                          x = ((t & 15) << 2) | (u >> 6),
                          w = u & 63;
                      q || ((w = 64), p || (x = 64));
                      m.push(Yf[v], Yf[y], Yf[x], Yf[w]);
                  }
                  g = m.join("");
                  f.call(e, g);
              }
          }
      var B = b.join("*");
      return ["1", ng(B), B].join("*");
  };
  function ng(a, b) {
      var c = [H.navigator.userAgent, new Date().getTimezoneOffset(), Za.userLanguage || Za.language, Math.floor(Da() / 60 / 1e3) - (void 0 === b ? 0 : b), a].join("*"),
          d;
      if (!(d = bg)) {
          for (var e = Array(256), f = 0; 256 > f; f++) {
              for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
              e[f] = g;
          }
          d = e;
      }
      bg = d;
      for (var m = 4294967295, n = 0; n < c.length; n++) m = (m >>> 8) ^ bg[(m ^ c.charCodeAt(n)) & 255];
      return ((m ^ -1) >>> 0).toString(36);
  }
  function pg() {
      return function (a) {
          var b = Qe(H.location.href),
              c = b.search.replace("?", ""),
              d = Le(c, "_gl", !0) || "";
          a.query = qg(d) || {};
          var e = Oe(b, "fragment").match(mg("_gl"));
          a.fragment = qg((e && e[3]) || "") || {};
      };
  }
  function rg(a, b) {
      var c = mg(a).exec(b),
          d = b;
      if (c) {
          var e = c[2],
              f = c[4];
          d = c[1];
          f && (d = d + e + f);
      }
      return d;
  }
  var sg = function (a, b) {
          b || (b = "_gl");
          var c = lg.exec(a);
          if (!c) return "";
          var d = c[1],
              e = rg(b, (c[2] || "").slice(1)),
              f = rg(b, (c[3] || "").slice(1));
          e.length && (e = "?" + e);
          f.length && (f = "#" + f);
          return "" + d + e + f;
      },
      tg = function (a) {
          var b = pg(),
              c = eg();
          c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
          var d = {},
              e = c.data;
          e && (Ga(d, e.query), a && Ga(d, e.fragment));
          return d;
      },
      qg = function (a) {
          try {
              var b = ug(a, 3);
              if (void 0 !== b) {
                  for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                      var f = d[e],
                          g = ag(d[e + 1]);
                      c[f] = g;
                  }
                  Qc("TAGGING", 6);
                  return c;
              }
          } catch (l) {
              Qc("TAGGING", 8);
          }
      };
  function ug(a, b) {
      if (a) {
          var c;
          a: {
              for (var d = a, e = 0; 3 > e; ++e) {
                  var f = ig.exec(d);
                  if (f) {
                      c = f;
                      break a;
                  }
                  d = decodeURIComponent(d);
              }
              c = void 0;
          }
          var g = c;
          if (g && "1" === g[1]) {
              var l = g[3],
                  m;
              a: {
                  for (var n = g[2], p = 0; p < b; ++p)
                      if (n === ng(l, p)) {
                          m = !0;
                          break a;
                      }
                  m = !1;
              }
              if (m) return l;
              Qc("TAGGING", 7);
          }
      }
  }
  function vg(a, b, c, d) {
      function e(p) {
          p = rg(a, p);
          var q = p.charAt(p.length - 1);
          p && "&" !== q && (p += "&");
          return p + n;
      }
      d = void 0 === d ? !1 : d;
      var f = lg.exec(c);
      if (!f) return "";
      var g = f[1],
          l = f[2] || "",
          m = f[3] || "",
          n = a + "=" + b;
      d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
      return "" + g + l + m;
  }
  function wg(a, b) {
      var c = "FORM" === (a.tagName || "").toUpperCase(),
          d = hg(b, 1, c),
          e = hg(b, 2, c),
          f = hg(b, 3, c);
      if (Ha(d)) {
          var g = og(d);
          c ? xg("_gl", g, a) : yg("_gl", g, a, !1);
      }
      if (!c && Ha(e)) {
          var l = og(e);
          yg("_gl", l, a, !0);
      }
      for (var m in f)
          if (f.hasOwnProperty(m))
              a: {
                  var n = m,
                      p = f[m],
                      q = a;
                  if (q.tagName) {
                      if ("a" === q.tagName.toLowerCase()) {
                          yg(n, p, q);
                          break a;
                      }
                      if ("form" === q.tagName.toLowerCase()) {
                          xg(n, p, q);
                          break a;
                      }
                  }
                  "string" == typeof q && vg(n, p, q);
              }
  }
  function yg(a, b, c, d) {
      if (c.href) {
          var e = vg(a, b, c.href, void 0 === d ? !1 : d);
          Ra.test(e) && (c.href = e);
      }
  }
  function xg(a, b, c) {
      if (c && c.action) {
          var d = (c.method || "").toLowerCase();
          if ("get" === d) {
              for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                  var l = e[g];
                  if (l.name === a) {
                      l.setAttribute("value", b);
                      f = !0;
                      break;
                  }
              }
              if (!f) {
                  var m = I.createElement("input");
                  m.setAttribute("type", "hidden");
                  m.setAttribute("name", a);
                  m.setAttribute("value", b);
                  c.appendChild(m);
              }
          } else if ("post" === d) {
              var n = vg(a, b, c.action);
              Ra.test(n) && (c.action = n);
          }
      }
  }
  function cg(a) {
      try {
          var b;
          a: {
              for (var c = a, d = 100; c && 0 < d; ) {
                  if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                      b = c;
                      break a;
                  }
                  c = c.parentNode;
                  d--;
              }
              b = null;
          }
          var e = b;
          if (e) {
              var f = e.protocol;
              ("http:" !== f && "https:" !== f) || wg(e, e.hostname);
          }
      } catch (g) {}
  }
  function dg(a) {
      try {
          if (a.action) {
              var b = Oe(Qe(a.action), "host");
              wg(a, b);
          }
      } catch (c) {}
  }
  var Ig = function (a, b, c, d) {
          fg();
          gg(a, b, "fragment" === c ? 2 : 1, !!d, !1);
      },
      Jg = function (a, b) {
          fg();
          gg(a, [Ne(H.location, "host", !0)], b, !0, !0);
      },
      Kg = function () {
          var a = I.location.hostname,
              b = jg.exec(I.referrer);
          if (!b) return !1;
          var c = b[2],
              d = b[1],
              e = "";
          if (c) {
              var f = c.split("/"),
                  g = f[1];
              e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
          } else if (d) {
              if (0 === d.indexOf("xn--")) return !1;
              e = d.replace(/-/g, ".").replace(/\.\./g, "-");
          }
          var l = a.replace(kg, ""),
              m = e.replace(kg, ""),
              n;
          if (!(n = l === m)) {
              var p = "." + m;
              n = l.substring(l.length - p.length, l.length) === p;
          }
          return n;
      },
      Lg = function (a, b) {
          return !1 === a ? !1 : a || b || Kg();
      };
  var Mg = {};
  var Ng = /^\w+$/,
      Og = /^[\w-]+$/,
      Pg = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
      Qg = function () {
          if (!Vc().g() || !id()) return !0;
          var a = fd("ad_storage");
          return null == a ? !0 : !!a;
      },
      Rg = function (a, b) {
          hd("ad_storage")
              ? Qg()
                  ? a()
                  : nd(a, "ad_storage")
              : b
              ? Qc("TAGGING", 3)
              : md(
                    function () {
                        Rg(a, !0);
                    },
                    ["ad_storage"]
                );
      },
      Tg = function (a) {
          return Sg(a).map(function (b) {
              return b.Da;
          });
      },
      Sg = function (a) {
          var b = [];
          if (!rf(H) || !I.cookie) return b;
          var c = uf(a, I.cookie, void 0, "ad_storage");
          if (!c || 0 == c.length) return b;
          for (var d = {}, e = 0; e < c.length; d = { ed: d.ed }, e++) {
              var f = Ug(c[e]);
              if (null != f) {
                  var g = f,
                      l = g.version;
                  d.ed = g.Da;
                  var m = g.timestamp,
                      n = g.labels,
                      p = sa(
                          b,
                          (function (q) {
                              return function (r) {
                                  return r.Da === q.ed;
                              };
                          })(d)
                      );
                  p ? ((p.timestamp = Math.max(p.timestamp, m)), (p.labels = Vg(p.labels, n || []))) : b.push({ version: l, Da: d.ed, timestamp: m, labels: n });
              }
          }
          b.sort(function (q, r) {
              return r.timestamp - q.timestamp;
          });
          return Wg(b);
      };
  function Vg(a, b) {
      for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e]);
      for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
      return d;
  }
  function Xg(a) {
      return a && "string" == typeof a && a.match(Ng) ? a : "_gcl";
  }
  var Zg = function () {
          var a = Qe(H.location.href),
              b = Oe(a, "query", !1, void 0, "gclid"),
              c = Oe(a, "query", !1, void 0, "gclsrc"),
              d = Oe(a, "query", !1, void 0, "wbraid"),
              e = Oe(a, "query", !1, void 0, "dclid");
          if (!b || !c || !d) {
              var f = a.hash.replace("#", "");
              b = b || Le(f, "gclid");
              c = c || Le(f, "gclsrc");
              d = d || Le(f, "wbraid");
          }
          return Yg(b, c, e, d);
      },
      Yg = function (a, b, c, d) {
          var e = {},
              f = function (g, l) {
                  e[l] || (e[l] = []);
                  e[l].push(g);
              };
          e.gclid = a;
          e.gclsrc = b;
          e.dclid = c;
          void 0 !== d && Og.test(d) && ((e.gbraid = d), f(d, "gb"));
          if (void 0 !== a && a.match(Og))
              switch (b) {
                  case void 0:
                      f(a, "aw");
                      break;
                  case "aw.ds":
                      f(a, "aw");
                      f(a, "dc");
                      break;
                  case "ds":
                      f(a, "dc");
                      break;
                  case "3p.ds":
                      f(a, "dc");
                      break;
                  case "gf":
                      f(a, "gf");
                      break;
                  case "ha":
                      f(a, "ha");
              }
          c && f(c, "dc");
          return e;
      },
      ah = function (a) {
          var b = Zg();
          Rg(function () {
              $g(b, !1, a);
          });
      };
  function $g(a, b, c, d, e) {
      function f(y, x) {
          var w = bh(y, g);
          w && (Df(w, x, l), (m = !0));
      }
      c = c || {};
      e = e || [];
      var g = Xg(c.prefix);
      d = d || Da();
      var l = Mf(c, d, !0);
      l.Va = "ad_storage";
      var m = !1,
          n = Math.round(d / 1e3),
          p = function (y) {
              var x = ["GCL", n, y];
              0 < e.length && x.push(e.join("."));
              return x.join(".");
          };
      a.aw && f("aw", p(a.aw[0]));
      a.dc && f("dc", p(a.dc[0]));
      a.gf && f("gf", p(a.gf[0]));
      a.ha && f("ha", p(a.ha[0]));
      a.gp && f("gp", p(a.gp[0]));
      if ((void 0 == Mg.enable_gbraid_cookie_write ? 0 : Mg.enable_gbraid_cookie_write) && !m && a.gb) {
          var q = a.gb[0],
              r = bh("gb", g),
              t = !1;
          if (!b) for (var u = Sg(r), v = 0; v < u.length; v++) u[v].Da === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
          t || f("gb", p(q));
      }
  }
  var dh = function (a, b) {
          var c = tg(!0);
          Rg(function () {
              for (var d = Xg(b.prefix), e = 0; e < a.length; ++e) {
                  var f = a[e];
                  if (void 0 !== Pg[f]) {
                      var g = bh(f, d),
                          l = c[g];
                      if (l) {
                          var m = Math.min(ch(l), Da()),
                              n;
                          b: {
                              var p = m;
                              if (rf(H))
                                  for (var q = uf(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                      if (ch(q[r]) > p) {
                                          n = !0;
                                          break b;
                                      }
                              n = !1;
                          }
                          if (!n) {
                              var t = Mf(b, m, !0);
                              t.Va = "ad_storage";
                              Df(g, l, t);
                          }
                      }
                  }
              }
              $g(Yg(c.gclid, c.gclsrc), !1, b);
          });
      },
      bh = function (a, b) {
          var c = Pg[a];
          if (void 0 !== c) return b + c;
      },
      ch = function (a) {
          return 0 !== eh(a.split(".")).length ? 1e3 * (Number(a.split(".")[1]) || 0) : 0;
      };
  function Ug(a) {
      var b = eh(a.split("."));
      return 0 === b.length ? null : { version: b[0], Da: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) };
  }
  function eh(a) {
      return 3 > a.length || ("GCL" !== a[0] && "1" !== a[0]) || !/^\d+$/.test(a[1]) || !Og.test(a[2]) ? [] : a;
  }
  var fh = function (a, b, c, d, e) {
          if (ra(b) && rf(H)) {
              var f = Xg(e),
                  g = function () {
                      for (var l = {}, m = 0; m < a.length; ++m) {
                          var n = bh(a[m], f);
                          if (n) {
                              var p = uf(n, I.cookie, void 0, "ad_storage");
                              p.length && (l[n] = p.sort()[p.length - 1]);
                          }
                      }
                      return l;
                  };
              Rg(function () {
                  Ig(g, b, c, d);
              });
          }
      },
      Wg = function (a) {
          return a.filter(function (b) {
              return Og.test(b.Da);
          });
      },
      gh = function (a, b) {
          if (rf(H)) {
              for (var c = Xg(b.prefix), d = {}, e = 0; e < a.length; e++) Pg[a[e]] && (d[a[e]] = Pg[a[e]]);
              Rg(function () {
                  A(d, function (f, g) {
                      var l = uf(c + g, I.cookie, void 0, "ad_storage");
                      l.sort(function (t, u) {
                          return ch(u) - ch(t);
                      });
                      if (l.length) {
                          var m = l[0],
                              n = ch(m),
                              p = 0 !== eh(m.split(".")).length ? m.split(".").slice(3) : [],
                              q = {},
                              r;
                          r = 0 !== eh(m.split(".")).length ? m.split(".")[2] : void 0;
                          q[f] = [r];
                          $g(q, !0, b, n, p);
                      }
                  });
              });
          }
      };
  function hh(a, b) {
      for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
      return !1;
  }
  var ih = function (a) {
      function b(e, f, g) {
          g && (e[f] = g);
      }
      if (id()) {
          var c = Zg();
          if (hh(c, a)) {
              var d = {};
              b(d, "gclid", c.gclid);
              b(d, "dclid", c.dclid);
              b(d, "gclsrc", c.gclsrc);
              b(d, "wbraid", c.gbraid);
              Jg(function () {
                  return d;
              }, 3);
              Jg(function () {
                  var e = {};
                  return (e._up = "1"), e;
              }, 1);
          }
      }
  };
  function jh(a, b) {
      var c = Xg(b),
          d = bh(a, c);
      if (!d) return 0;
      for (var e = Sg(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
      return f;
  }
  function kh(a) {
      var b = 0,
          c;
      for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
      return b;
  }
  var Eh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
      Fh = {
          cl: ["ecl"],
          customPixels: ["nonGooglePixels"],
          ecl: ["cl"],
          ehl: ["hl"],
          hl: ["ehl"],
          html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
          customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
          nonGooglePixels: [],
          nonGoogleScripts: ["nonGooglePixels"],
          nonGoogleIframes: ["nonGooglePixels"],
      },
      Gh = {
          cl: ["ecl"],
          customPixels: ["customScripts", "html"],
          ecl: ["cl"],
          ehl: ["hl"],
          hl: ["ehl"],
          html: ["customScripts"],
          customScripts: ["html"],
          nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
          nonGoogleScripts: ["customScripts", "html"],
          nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
      },
      Hh = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
  var Ih = function () {
          var a = !1;
          return a;
      },
      Kh = function (a) {
          var b = pe("gtm.allowlist") || pe("gtm.whitelist");
          b && R(9);
          Ih() && (b = ["google", "gtagfl", "lcl", "zone"]);
          var c = b && Ia(Aa(b), Fh),
              d = pe("gtm.blocklist") || pe("gtm.blacklist");
          d || ((d = pe("tagTypeBlacklist")) && R(3));
          d ? R(8) : (d = []);
          Jh() && ((d = Aa(d)), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
          0 <= Aa(d).indexOf("google") && R(2);
          var e = d && Ia(Aa(d), Gh),
              f = {};
          return function (g) {
              var l = g && g[wb.vb];
              if (!l || "string" != typeof l) return !0;
              l = l.replace(/^_*/, "");
              if (void 0 !== f[l]) return f[l];
              var m = ie[l] || [],
                  n = a(l, m);
              if (b) {
                  var p;
                  if ((p = n))
                      a: {
                          if (0 > c.indexOf(l))
                              if (m && 0 < m.length)
                                  for (var q = 0; q < m.length; q++) {
                                      if (0 > c.indexOf(m[q])) {
                                          R(11);
                                          p = !1;
                                          break a;
                                      }
                                  }
                              else {
                                  p = !1;
                                  break a;
                              }
                          p = !0;
                      }
                  n = p;
              }
              var r = !1;
              if (d) {
                  var t = 0 <= e.indexOf(l);
                  if (t) r = t;
                  else {
                      var u = va(e, m || []);
                      u && R(10);
                      r = u;
                  }
              }
              var v = !n || r;
              v || !(0 <= m.indexOf("sandboxedScripts")) || (c && -1 !== c.indexOf("sandboxedScripts")) || (v = va(e, Hh));
              return (f[l] = v);
          };
      },
      Jh = function () {
          return Eh.test(H.location && H.location.hostname);
      };
  var Lh = { F: "GTM-N8R3VWS", nc: "" },
      Mh = { ah: "GTM-N8R3VWS", bh: "GTM-N8R3VWS" },
      Nh = function () {
          var a = [Lh.F];
          return a;
      },
      Oh = function () {
          var a = [Lh.F];
          return a;
      },
      Ph = function () {
          this.container = {};
          this.destination = {};
          this.canonical = {};
      },
      Rh = function (a) {
          return Qh().container.hasOwnProperty(a);
      };
  function Qh() {
      var a = T.tidr;
      a || ((a = new Ph()), (T.tidr = a));
      return a;
  }
  var Uh = function (a) {},
      Yh = function (a) {},
      Zh = function () {
          return (
              "&tc=" +
              Yb.filter(function (a) {
                  return a;
              }).length
          );
      },
      bi = function () {
          2022 <= $h().length && ai();
      },
      ci = function (a) {
          return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
      },
      ei = function () {
          di || (di = H.setTimeout(ai, 500));
      },
      ai = function () {
          di && (H.clearTimeout(di), (di = void 0));
          if (void 0 !== fi && (!gi[fi] || hi || ii))
              if (ji[fi] || ki.aj() || 0 >= li--) R(1), (ji[fi] = !0);
              else {
                  ki.zj();
                  var a = $h(!0);
                  ib(a);
                  gi[fi] = !0;
                  ni = mi = pi = qi = ri = ii = hi = "";
                  oi = [];
              }
      },
      $h = function (a) {
          var b = fi;
          if (void 0 === b) return "";
          var c = Rc("GTM"),
              d = Rc("TAGGING");
          return [si, gi[b] ? "" : "&es=1", ti[b], Uh(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Zh(), hi, ii, ri, qi, Yh(a), pi, mi, ni ? "&dl=" + encodeURIComponent(ni) : "", 0 < oi.length ? "&tdp=" + oi.join(".") : "", "&z=0"].join(
              ""
          );
      },
      vi = function () {
          si = ui();
      },
      ui = function () {
          return [wi, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Yd.Hd].join("");
      },
      Xh = ["L", "S", "Y"],
      Th = ["S", "E"],
      xi = { sampleRate: "0.005000", th: "", sh: Number("5") },
      yi = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
      zi;
  if (!(zi = yi)) {
      var Ai = Math.random(),
          Bi = xi.sampleRate;
      zi = Ai < Bi;
  }
  var Ci = zi,
      wi = "https://www.googletagmanager.com/a?id=" + Lh.F + "&cv=4",
      Di = { label: Lh.F + " Container", children: [{ label: "Initialization", children: [] }] },
      si = ui(),
      gi = {},
      hi = "",
      ii = "",
      pi = "",
      qi = "",
      mi = "",
      oi = [],
      ni = "",
      Wh = {},
      Vh = !1,
      Sh = {},
      Ei = {},
      ri = "",
      fi = void 0,
      ti = {},
      ji = {},
      di = void 0,
      Fi = 5;
  0 < xi.sh && (Fi = xi.sh);
  var ki = (function (a, b) {
          for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
          return {
              aj: function () {
                  return c < a ? !1 : Da() - d[c % a] < b;
              },
              zj: function () {
                  var f = c++ % a;
                  d[f] = Da();
              },
          };
      })(Fi, 1e3),
      li = 1e3,
      Hi = function (a, b) {
          if (Ci && !ji[a] && fi !== a) {
              ai();
              fi = a;
              pi = hi = "";
              ti[a] = "&e=" + ci(b) + "&eid=" + a;
              ei();
          }
      },
      Ii = function (a, b, c, d) {
          if (Ci && b) {
              var e,
                  f = String(b[wb.vb] || "").replace(/_/g, "");
              0 === f.indexOf("cvt") && (f = "cvt");
              e = f;
              var g = c + e;
              if (!ji[a]) {
                  a !== fi && (ai(), (fi = a));
                  hi = hi ? hi + "." + g : "&tr=" + g;
                  var l = b["function"];
                  if (!l) throw Error("Error: No function name given for function call.");
                  var m = ($b[l] ? "1" : "2") + e;
                  pi = pi ? pi + "." + m : "&ti=" + m;
                  ei();
                  bi();
              }
          }
      };
  var Pi = function (a, b, c) {
          if (Ci && !ji[a]) {
              a !== fi && (ai(), (fi = a));
              var d = c + b;
              ii = ii ? ii + "." + d : "&epr=" + d;
              ei();
              bi();
          }
      },
      Qi = function (a, b, c) {};
  var Ri = { initialized: 11, complete: 12, interactive: 13 },
      Si = {},
      Ti = Object.freeze(((Si[Q.ub] = !0), (Si[Q.Kc] = !0), Si)),
      Ui = {},
      Vi = Object.freeze(((Ui[Q.Ca] = !0), Ui)),
      Wi = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics="),
      Yi = function (a, b, c) {};
  function Zi(a, b) {
      var c = {},
          d;
      for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
      for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
      return c;
  }
  function Xi(a, b, c, d) {
      c = void 0 === c ? {} : c;
      d = void 0 === d ? "" : d;
      if (a === b) return [];
      var e = function (q, r) {
              var t = r[q];
              return void 0 === t ? Vi[q] : t;
          },
          f;
      for (f in Zi(a, b))
          if (!Ti[f]) {
              var g = (d ? d + "." : "") + f,
                  l = e(f, a),
                  m = e(f, b),
                  n = "object" === sb(l) || "array" === sb(l),
                  p = "object" === sb(m) || "array" === sb(m);
              if (n && p) Xi(l, m, c, g);
              else if (n || p || l !== m) c[g] = !0;
          }
      return Object.keys(c);
  }
  var $i = !1,
      aj = 0,
      bj = [];
  function cj(a) {
      if (!$i) {
          var b = I.createEventObject,
              c = "complete" == I.readyState,
              d = "interactive" == I.readyState;
          if (!a || "readystatechange" != a.type || c || (!b && d)) {
              $i = !0;
              for (var e = 0; e < bj.length; e++) K(bj[e]);
          }
          bj.push = function () {
              for (var f = 0; f < arguments.length; f++) K(arguments[f]);
              return 0;
          };
      }
  }
  function dj() {
      if (!$i && 140 > aj) {
          aj++;
          try {
              I.documentElement.doScroll("left"), cj();
          } catch (a) {
              H.setTimeout(dj, 50);
          }
      }
  }
  var ej = function (a) {
      $i ? a() : bj.push(a);
  };
  var fj = function (a, b) {
      return { entityType: 1, indexInOriginContainer: a, nameInOriginContainer: b, originContainerId: Lh.F };
  };
  var hj = function (a, b) {
          this.g = !1;
          this.C = [];
          this.I = { tags: [] };
          this.W = !1;
          this.o = this.s = 0;
          gj(this, a, b);
      },
      ij = function (a, b, c, d) {
          if (ae.hasOwnProperty(b) || "__zone" === b) return -1;
          var e = {};
          ub(d) && (e = N(d, e));
          e.id = c;
          e.status = "timeout";
          return a.I.tags.push(e) - 1;
      },
      jj = function (a, b, c, d) {
          var e = a.I.tags[b];
          e && ((e.status = c), (e.executionTime = d));
      },
      kj = function (a) {
          if (!a.g) {
              for (var b = a.C, c = 0; c < b.length; c++) b[c]();
              a.g = !0;
              a.C.length = 0;
          }
      },
      gj = function (a, b, c) {
          void 0 !== b && lj(a, b);
          c &&
              H.setTimeout(function () {
                  return kj(a);
              }, Number(c));
      },
      lj = function (a, b) {
          var c = Fa(function () {
              return K(function () {
                  b(Lh.F, a.I);
              });
          });
          a.g ? c() : a.C.push(c);
      },
      mj = function (a) {
          a.s++;
          return Fa(function () {
              a.o++;
              a.W && a.o >= a.s && kj(a);
          });
      },
      nj = function (a) {
          a.W = !0;
          a.o >= a.s && kj(a);
      };
  var oj = function () {
          function a(d) {
              return !qa(d) || 0 > d ? 0 : d;
          }
          if (!T._li && H.performance && H.performance.timing) {
              var b = H.performance.timing.navigationStart,
                  c = qa(qe.get("gtm.start")) ? qe.get("gtm.start") : 0;
              T._li = { cst: a(c - b), cbt: a(ge - b) };
          }
      },
      pj = function (a) {
          H.performance && H.performance.mark(Lh.F + "_" + a + "_start");
      },
      qj = function (a) {
          if (H.performance) {
              var b = Lh.F + "_" + a + "_start",
                  c = Lh.F + "_" + a + "_duration";
              H.performance.measure(c, b);
              var d = H.performance.getEntriesByName(c)[0];
              H.performance.clearMarks(b);
              H.performance.clearMeasures(c);
              var e = T._p || {};
              void 0 === e[a] && ((e[a] = d.duration), (T._p = e));
              return d.duration;
          }
      },
      rj = function () {
          if (H.performance && H.performance.now) {
              var a = T._p || {};
              a.PAGEVIEW = H.performance.now();
              T._p = a;
          }
      };
  var sj = {},
      tj = function () {
          return H.GoogleAnalyticsObject && H[H.GoogleAnalyticsObject];
      },
      uj = !1;
  var vj = function (a) {
          H.GoogleAnalyticsObject || (H.GoogleAnalyticsObject = a || "ga");
          var b = H.GoogleAnalyticsObject;
          if (H[b]) H.hasOwnProperty(b) || R(12);
          else {
              var c = function () {
                  c.q = c.q || [];
                  c.q.push(arguments);
              };
              c.l = Number(Ca());
              H[b] = c;
          }
          oj();
          return H[b];
      },
      wj = function (a) {
          if (id()) {
              var b = tj();
              b(a + "require", "linker");
              b(a + "linker:passthrough", !0);
          }
      };
  function xj() {
      return H.GoogleAnalyticsObject || "ga";
  }
  var yj = function (a) {},
      zj = function (a, b) {
          return function () {
              var c = tj(),
                  d = c && c.getByName && c.getByName(a);
              if (d) {
                  var e = d.get("sendHitTask");
                  d.set("sendHitTask", function (f) {
                      var g = f.get("hitPayload"),
                          l = f.get("hitCallback"),
                          m = 0 > g.indexOf("&tid=" + b);
                      m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                      e(f);
                      m && (f.set("hitPayload", g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f));
                  });
              }
          };
      };
  function Ej(a, b, c, d) {
      var e = Yb[a],
          f = Fj(a, b, c, d);
      if (!f) return null;
      var g = fc(e[wb.og], c, []);
      if (g && g.length) {
          var l = g[0];
          f = Ej(l.index, { onSuccess: f, onFailure: 1 === l.Ng ? b.terminate : f, terminate: b.terminate }, c, d);
      }
      return f;
  }
  function Fj(a, b, c, d) {
      function e() {
          if (f[wb.ii]) l();
          else {
              var y = gc(f, c, []);
              var x = y[wb.xh];
              if (null != x)
                  for (var w = 0; w < x.length; w++)
                      if (!vd(x[w])) {
                          l();
                          return;
                      }
              var B = ij(c.yb, String(f[wb.vb]), Number(f[wb.qg]), y[wb.ji]),
                  z = !1;
              y.vtp_gtmOnSuccess = function () {
                  if (!z) {
                      z = !0;
                      var F = Da() - E;
                      Ii(c.id, Yb[a], "5", F);
                      jj(c.yb, B, "success", F);
                      g();
                  }
              };
              y.vtp_gtmOnFailure = function () {
                  if (!z) {
                      z = !0;
                      var F = Da() - E;
                      Ii(c.id, Yb[a], "6", F);
                      jj(c.yb, B, "failure", F);
                      l();
                  }
              };
              y.vtp_gtmTagId = f.tag_id;
              y.vtp_gtmEventId = c.id;
              c.priorityId && (y.vtp_gtmPriorityId = c.priorityId);
              Ii(c.id, f, "1");
              var D = function () {
                  var F = Da() - E;
                  Ii(c.id, f, "7", F);
                  jj(c.yb, B, "exception", F);
                  z || ((z = !0), l());
              };
              var E = Da();
              try {
                  dc(y, { event: c, index: a, type: 1 });
              } catch (F) {
                  D(F);
              }
          }
      }
      var f = Yb[a],
          g = b.onSuccess,
          l = b.onFailure,
          m = b.terminate;
      if (c.bf(f)) return null;
      var n = fc(f[wb.rg], c, []);
      if (n && n.length) {
          var p = n[0],
              q = Ej(p.index, { onSuccess: g, onFailure: l, terminate: m }, c, d);
          if (!q) return null;
          g = q;
          l = 2 === p.Ng ? m : q;
      }
      if (f[wb.jg] || f[wb.ni]) {
          var r = f[wb.jg] ? Zb : c.Mj,
              t = g,
              u = l;
          if (!r[a]) {
              e = Fa(e);
              var v = Gj(a, r, e);
              g = v.onSuccess;
              l = v.onFailure;
          }
          return function () {
              r[a](t, u);
          };
      }
      return e;
  }
  function Gj(a, b, c) {
      var d = [],
          e = [];
      b[a] = Hj(d, e, c);
      return {
          onSuccess: function () {
              b[a] = Ij;
              for (var f = 0; f < d.length; f++) d[f]();
          },
          onFailure: function () {
              b[a] = ak;
              for (var f = 0; f < e.length; f++) e[f]();
          },
      };
  }
  function Hj(a, b, c) {
      return function (d, e) {
          a.push(d);
          b.push(e);
          c();
      };
  }
  function Ij(a) {
      a();
  }
  function ak(a, b) {
      b();
  }
  function bk(a, b) {
      if (a) {
          var c = "" + a;
          0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
          "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
          return Qe("" + c + b).href;
      }
  }
  function ck(a, b) {
      return dk() ? bk(a, b) : void 0;
  }
  function dk() {
      var a = !1;
      return a;
  }
  function ek() {
      return !!Yd.Id && "SGTM_TOKEN" !== Yd.Id.split("@@").join("");
  }
  var fk = function () {
      var a = !1;
      return a;
  };
  var hk = function (a, b, c, d) {
          return (2 === gk() || d || "http:" != H.location.protocol ? a : b) + c;
      },
      gk = function () {
          var a = gb(),
              b;
          if (1 === a)
              a: {
                  var c = ce;
                  c = c.toLowerCase();
                  for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                      var m = g[l].src;
                      if (m) {
                          m = m.toLowerCase();
                          if (0 === m.indexOf(e)) {
                              b = 3;
                              break a;
                          }
                          1 === f && 0 === m.indexOf(d) && (f = 2);
                      }
                  }
                  b = f;
              }
          else b = a;
          return b;
      };
  var ik = !1;
  var kk = function (a, b, c) {
          if (!jk() && !Rh(a)) {
              var d = c ? "/gtag/js" : "/gtm.js",
                  e = "?id=" + encodeURIComponent(a) + "&l=" + Yd.Z,
                  f = 0 === a.indexOf("GTM-");
              f || (e += "&cx=c");
              var g = ek();
              g && (e += "&sign=" + Yd.Id);
              var l = ck(b, d + e);
              if (!l) {
                  var m = Yd.oc + d;
                  g && $a && f && (m = $a.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                  l = hk("https://", "http://", m + e);
              }
              Qh().container[a] = !0;
              fb(l);
          }
      },
      lk = function (a, b) {
          if (ik) {
              var c;
              if ((c = !jk())) c = !Qh().destination.hasOwnProperty(a);
              if (c) {
                  var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Yd.Z + "&cx=c";
                  ek() && (d += "&sign=" + Yd.Id);
                  var e = ck(b, d);
                  e || (e = hk("https://", "http://", Yd.oc + d));
                  Qh().destination[a] = !0;
                  fb(e);
              }
          } else kk(a, b, !0);
      };
  function jk() {
      if (fk()) {
          return !0;
      }
      return !1;
  }
  var mk = [];
  mk[1] = !0;
  var nk = function () {
          this.eventModel = {};
          this.targetConfig = {};
          this.containerConfig = {};
          this.globalConfig = {};
          this.dataLayerConfig = {};
          this.remoteConfig = {};
          this.eventMetadata = {};
          this.onSuccess = function () {};
          this.onFailure = function () {};
          this.setContainerTypeLoaded = function () {};
          this.getContainerTypeLoaded = function () {};
          this.priorityId = this.eventId = void 0;
          this.isGtmEvent = !1;
      },
      ok = function (a) {
          var b = new nk();
          b.eventModel = a;
          return b;
      },
      pk = function (a, b) {
          a.targetConfig = b;
          return a;
      },
      qk = function (a, b) {
          a.containerConfig = b;
          return a;
      },
      rk = function (a, b) {
          a.globalConfig = b;
          return a;
      },
      sk = function (a, b) {
          a.dataLayerConfig = b;
          return a;
      },
      tk = function (a, b) {
          a.remoteConfig = b;
          return a;
      },
      uk = function (a, b) {
          a.onSuccess = b;
          return a;
      },
      vk = function (a, b) {
          a.setContainerTypeLoaded = b;
          return a;
      },
      wk = function (a, b) {
          a.getContainerTypeLoaded = b;
          return a;
      },
      xk = function (a, b) {
          a.onFailure = b;
          return a;
      };
  h = nk.prototype;
  h.getWithConfig = function (a) {
      if (void 0 !== this.eventModel[a]) return this.eventModel[a];
      if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
      if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
      yk(this, this.globalConfig[a], this.dataLayerConfig[a]) && (R(71), R(79));
      if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
      if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  h.getTopLevelKeys = function () {
      function a(f) {
          for (var g = Object.keys(f), l = 0; l < g.length; ++l) b[g[l]] = 1;
      }
      var b = {};
      a(this.eventModel);
      a(this.targetConfig);
      a(this.containerConfig);
      a(this.globalConfig);
      for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
          var e = c[d];
          if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
              R(71);
              R(80);
              break;
          }
      }
      return Object.keys(b);
  };
  h.getMergedValues = function (a, b) {
      function c(l) {
          ub(l) &&
              A(l, function (m, n) {
                  e = !0;
                  d[m] = n;
              });
      }
      var d = {},
          e = !1;
      (b && 1 !== b) || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
      (b && 2 !== b) || c(this.eventModel[a]);
      var f = e,
          g = d;
      d = {};
      e = !1;
      (b && 1 !== b) || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
      (b && 2 !== b) || c(this.eventModel[a]);
      if (e !== f || yk(this, d, g)) R(71), R(81);
      e = f;
      d = g;
      return e ? d : void 0;
  };
  h.getKeysFromFirstOfAnyScope = function (a) {
      var b = {},
          c = !1,
          d = function (g) {
              for (var l = 0; l < a.length; l++) void 0 !== g[a[l]] && ((b[a[l]] = g[a[l]]), (c = !0));
              return c;
          };
      if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
      d(this.globalConfig);
      var e = b,
          f = c;
      b = {};
      c = !1;
      d(this.dataLayerConfig);
      yk(this, b, e) && (R(71), R(82));
      b = e;
      c = f;
      if (c) return b;
      d(this.remoteConfig);
      return b;
  };
  h.getEventModelKeys = function () {
      var a = [],
          b;
      for (b in this.eventModel) b !== Q.ub && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b);
      return a;
  };
  var yk = function (a, b, c) {
      try {
          if (b === c) return !1;
          var d = sb(b);
          if (d !== sb(c) || !((ub(b) && ub(c)) || "array" === d)) return !0;
          if ("array" === d) {
              if (b.length !== c.length) return !0;
              for (var e = 0; e < b.length; e++) if (yk(a, b[e], c[e])) return !0;
          } else {
              for (var f in c) if (!b.hasOwnProperty(f)) return !0;
              for (var g in b) if (!c.hasOwnProperty(g) || yk(a, b[g], c[g])) return !0;
          }
      } catch (l) {
          R(72);
      }
      return !1;
  };
  var zk = function () {
      T.dedupe_gclid || (T.dedupe_gclid = "" + Hf());
      return T.dedupe_gclid;
  };
  var Ak;
  if (3 === Yd.Hd.length) Ak = "g";
  else {
      var Bk = "G";
      Ak = Bk;
  }
  var Ck = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Ak, OPT: "o" },
      Dk = function (a) {
          var b = Lh.F.split("-"),
              c = b[0].toUpperCase(),
              d = Ck[c] || "i",
              e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
              f;
          if (3 === Yd.Hd.length) {
              var g = "w";
              f = "2" + g;
          } else f = "";
          return f + d + Yd.Hd + e;
      };
  function Ek(a, b) {
      if ("" === a) return b;
      var c = Number(a);
      return isNaN(c) ? b : c;
  }
  var Fk = function (a, b) {
      a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function Gk() {
      return Ta("iPhone") && !Ta("iPod") && !Ta("iPad");
  }
  Ta("Opera");
  Ta("Trident") || Ta("MSIE");
  Ta("Edge");
  !Ta("Gecko") || (-1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge")) || Ta("Trident") || Ta("MSIE") || Ta("Edge");
  -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile");
  Ta("Macintosh");
  Ta("Windows");
  Ta("Linux") || Ta("CrOS");
  var Hk = la.navigator || null;
  Hk && (Hk.appVersion || "").indexOf("X11");
  Ta("Android");
  Gk();
  Ta("iPad");
  Ta("iPod");
  Gk() || Ta("iPad") || Ta("iPod");
  Sa().toLowerCase().indexOf("kaios");
  var Ik = function (a) {
      if (!a || !I.head) return null;
      var b, c;
      c = void 0 === c ? document : c;
      b = c.createElement("meta");
      I.head.appendChild(b);
      b.httpEquiv = "origin-trial";
      b.content = a;
      return b;
  };
  var Jk = function () {};
  var Kk = function (a) {
          void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
          void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
          return (void 0 !== a.tcString && "string" !== typeof a.tcString) || (void 0 !== a.listenerId && "number" !== typeof a.listenerId) ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
      },
      Lk = function (a, b) {
          this.o = a;
          this.g = null;
          this.C = {};
          this.W = 0;
          this.I = void 0 === b ? 500 : b;
          this.s = null;
      };
  ja(Lk, Jk);
  Lk.prototype.addEventListener = function (a) {
      var b = {},
          c = qf(function () {
              return a(b);
          }),
          d = 0;
      -1 !== this.I &&
          (d = setTimeout(function () {
              b.tcString = "tcunavailable";
              b.internalErrorState = 1;
              c();
          }, this.I));
      var e = function (f, g) {
          clearTimeout(d);
          f ? ((b = f), (b.internalErrorState = Kk(b)), (g && 0 === b.internalErrorState) || ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3))) : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
          a(b);
      };
      try {
          Mk(this, "addEventListener", e);
      } catch (f) {
          (b.tcString = "tcunavailable"), (b.internalErrorState = 3), d && (clearTimeout(d), (d = 0)), c();
      }
  };
  Lk.prototype.removeEventListener = function (a) {
      a && a.listenerId && Mk(this, "removeEventListener", null, a.listenerId);
  };
  var Ok = function (a, b, c) {
          var d;
          d = void 0 === d ? "755" : d;
          var e;
          a: {
              if (a.publisher && a.publisher.restrictions) {
                  var f = a.publisher.restrictions[b];
                  if (void 0 !== f) {
                      e = f[void 0 === d ? "755" : d];
                      break a;
                  }
              }
              e = void 0;
          }
          var g = e;
          if (0 === g) return !1;
          var l = c;
          2 === c ? ((l = 0), 2 === g && (l = 1)) : 3 === c && ((l = 1), 1 === g && (l = 0));
          var m;
          if (0 === l)
              if (a.purpose && a.vendor) {
                  var n = Nk(a.vendor.consents, void 0 === d ? "755" : d);
                  m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Nk(a.purpose.consents, b);
              } else m = !0;
          else m = 1 === l ? (a.purpose && a.vendor ? Nk(a.purpose.legitimateInterests, b) && Nk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0) : !0;
          return m;
      },
      Nk = function (a, b) {
          return !(!a || !a[b]);
      },
      Mk = function (a, b, c, d) {
          c || (c = function () {});
          if ("function" === typeof a.o.__tcfapi) {
              var e = a.o.__tcfapi;
              e(b, 2, c, d);
          } else if (Pk(a)) {
              Qk(a);
              var f = ++a.W;
              a.C[f] = c;
              if (a.g) {
                  var g = {};
                  a.g.postMessage(((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g), "*");
              }
          } else c({}, !1);
      },
      Pk = function (a) {
          if (a.g) return a.g;
          var b;
          a: {
              for (var c = a.o, d = 0; 50 > d; ++d) {
                  var e;
                  try {
                      e = !(!c.frames || !c.frames.__tcfapiLocator);
                  } catch (l) {
                      e = !1;
                  }
                  if (e) {
                      b = c;
                      break a;
                  }
                  var f;
                  b: {
                      try {
                          var g = c.parent;
                          if (g && g != c) {
                              f = g;
                              break b;
                          }
                      } catch (l) {}
                      f = null;
                  }
                  if (!(c = f)) break;
              }
              b = null;
          }
          a.g = b;
          return a.g;
      },
      Qk = function (a) {
          a.s ||
              ((a.s = function (b) {
                  try {
                      var c;
                      c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                      a.C[c.callId](c.returnValue, c.success);
                  } catch (d) {}
              }),
              Fk(a.o, a.s));
      };
  var Rk = !0;
  Rk = !1;
  var Sk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
      Tk = Ek("", 550),
      Uk = Ek("", 500);
  function Vk() {
      var a = T.tcf || {};
      return (T.tcf = a);
  }
  var $k = function () {
      var a = Vk(),
          b = new Lk(H, Rk ? 3e3 : -1);
      if (!0 === H.gtag_enable_tcf_support && !a.active && ("function" === typeof H.__tcfapi || "function" === typeof b.o.__tcfapi || null != Pk(b))) {
          a.active = !0;
          a.Yc = {};
          Wk();
          var c = null;
          Rk
              ? (c = H.setTimeout(function () {
                    Xk(a);
                    Yk(a);
                    c = null;
                }, Uk))
              : (a.tcString = "tcunavailable");
          try {
              b.addEventListener(function (d) {
                  c && (clearTimeout(c), (c = null));
                  if (0 !== d.internalErrorState) Xk(a), Yk(a);
                  else {
                      var e;
                      a.gdprApplies = d.gdprApplies;
                      if (!1 === d.gdprApplies) (e = Zk()), b.removeEventListener(d);
                      else if ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                          var f = {},
                              g;
                          for (g in Sk)
                              if (Sk.hasOwnProperty(g))
                                  if ("1" === g) {
                                      var l = d,
                                          m = !0;
                                      m = void 0 === m ? !1 : m;
                                      var n;
                                      var p = l;
                                      !1 === p.gdprApplies
                                          ? (n = !0)
                                          : (void 0 === p.internalErrorState && (p.internalErrorState = Kk(p)),
                                            (n = "error" === p.cmpStatus || 0 !== p.internalErrorState || ("loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus)) ? !0 : !1));
                                      f["1"] = n ? (!1 === l.gdprApplies || "tcunavailable" === l.tcString || (void 0 === l.gdprApplies && !m) || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Ok(l, "1", 0)) : !1;
                                  } else f[g] = Ok(d, g, Sk[g]);
                          e = f;
                      }
                      e && ((a.tcString = d.tcString || "tcempty"), (a.Yc = e), Yk(a));
                  }
              });
          } catch (d) {
              c && (clearTimeout(c), (c = null)), Xk(a), Yk(a);
          }
      }
  };
  function Xk(a) {
      a.type = "e";
      a.tcString = "tcunavailable";
      Rk && (a.Yc = Zk());
  }
  function Wk() {
      var a = {},
          b = ((a.ad_storage = "denied"), (a.wait_for_update = Tk), a);
      sd(b);
  }
  function Zk() {
      var a = {},
          b;
      for (b in Sk) Sk.hasOwnProperty(b) && (a[b] = !0);
      return a;
  }
  function Yk(a) {
      var b = {},
          c = ((b.ad_storage = a.Yc["1"] ? "granted" : "denied"), b);
      ud(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: al() });
  }
  var al = function () {
          var a = Vk();
          return a.active ? a.tcString || "" : "";
      },
      bl = function () {
          var a = Vk();
          return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? "1" : "0") : "";
      },
      cl = function (a) {
          if (!Sk.hasOwnProperty(String(a))) return !0;
          var b = Vk();
          return b.active && b.Yc ? !!b.Yc[String(a)] : !0;
      };
  var jl = !1;
  var kl = function () {
          this.g = {};
      },
      ll = function (a, b, c) {
          null != c && (a.g[b] = c);
      },
      ml = function (a) {
          return Object.keys(a.g)
              .map(function (b) {
                  return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]);
              })
              .join("&");
      },
      ol = function (a, b, c, d, e) {};
  var ql = /[A-Z]+/,
      rl = /\s/,
      sl = function (a) {
          if (k(a)) {
              a = Ba(a);
              var b = a.indexOf("-");
              if (!(0 > b)) {
                  var c = a.substring(0, b);
                  if (ql.test(c)) {
                      for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e] || (rl.test(d[e]) && ("AW" !== c || 1 !== e))) return;
                      return { id: a, prefix: c, containerId: c + "-" + d[0], J: d };
                  }
              }
          }
      },
      ul = function (a) {
          for (var b = {}, c = 0; c < a.length; ++c) {
              var d = sl(a[c]);
              d && (b[d.id] = d);
          }
          tl(b);
          var e = [];
          A(b, function (f, g) {
              e.push(g);
          });
          return e;
      };
  function tl(a) {
      var b = [],
          c;
      for (c in a)
          if (a.hasOwnProperty(c)) {
              var d = a[c];
              "AW" === d.prefix && d.J[1] && b.push(d.containerId);
          }
      for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var wl = function (a, b, c) {
          if (H[a.functionName]) return b.kf && K(b.kf), H[a.functionName];
          var d = vl();
          H[a.functionName] = d;
          if (a.Ld) for (var e = 0; e < a.Ld.length; e++) H[a.Ld[e]] = H[a.Ld[e]] || vl();
          a.Wd && void 0 === H[a.Wd] && (H[a.Wd] = c);
          fb(hk("https://", "http://", a.tf), b.kf, b.mj);
          return d;
      },
      vl = function () {
          var a = function () {
              a.q = a.q || [];
              a.q.push(arguments);
          };
          return a;
      },
      xl = { functionName: "_googWcmImpl", Wd: "_googWcmAk", tf: "www.gstatic.com/wcm/loader.js" },
      yl = { functionName: "_gaPhoneImpl", Wd: "ga_wpid", tf: "www.gstatic.com/gaphone/loader.js" },
      zl = { wh: "", ri: "5" },
      Al = { functionName: "_googCallTrackingImpl", Ld: [yl.functionName, xl.functionName], tf: "www.gstatic.com/call-tracking/call-tracking_" + (zl.wh || zl.ri) + ".js" },
      Bl = {},
      Cl = function (a, b, c, d) {
          R(22);
          if (c) {
              d = d || {};
              var e = wl(xl, d, a),
                  f = { ak: a, cl: b };
              void 0 === d.Ua && (f.autoreplace = c);
              e(2, d.Ua, f, c, 0, Ca(), d.options);
          }
      },
      Dl = function (a, b, c, d) {
          R(21);
          if (b && c) {
              d = d || {};
              for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Ca() }, f = 0; f < a.length; f++) {
                  var g = a[f];
                  Bl[g.id] ||
                      (g && "AW" === g.prefix && !e.adData && 2 <= g.J.length
                          ? ((e.adData = { ak: g.J[0], cl: g.J[1] }), (Bl[g.id] = !0))
                          : g && "UA" === g.prefix && !e.gaData && ((e.gaData = { gaWpid: g.containerId }), (Bl[g.id] = !0)));
              }
              (e.gaData || e.adData) && wl(Al, d)(d.Ua, e, d.options);
          }
      },
      El = function () {
          var a = !1;
          return a;
      },
      Fl = function (a, b) {
          if (a)
              if (fk()) {
              } else {
                  if (k(a)) {
                      var c = sl(a);
                      if (!c) return;
                      a = c;
                  }
                  var d = void 0,
                      e = !1,
                      f = b.getWithConfig(Q.Xh);
                  if (f && ra(f)) {
                      d = [];
                      for (var g = 0; g < f.length; g++) {
                          var l = sl(f[g]);
                          l && (d.push(l), (a.id === l.id || (a.id === a.containerId && a.containerId === l.containerId)) && (e = !0));
                      }
                  }
                  if (!d || e) {
                      var m = b.getWithConfig(Q.Xf),
                          n;
                      if (m) {
                          ra(m) ? (n = m) : (n = [m]);
                          var p = b.getWithConfig(Q.Vf),
                              q = b.getWithConfig(Q.Wf),
                              r = b.getWithConfig(Q.Yf),
                              t = b.getWithConfig(Q.Wh),
                              u = p || q,
                              v = 1;
                          "UA" !== a.prefix || d || (v = 5);
                          for (var y = 0; y < n.length; y++)
                              if (y < v)
                                  if (d) Dl(d, n[y], t, { Ua: u, options: r });
                                  else if ("AW" === a.prefix && a.J[1]) El() ? Dl([a], n[y], t || "US", { Ua: u, options: r }) : Cl(a.J[0], a.J[1], n[y], { Ua: u, options: r });
                                  else if ("UA" === a.prefix)
                                      if (El()) Dl([a], n[y], t || "US", { Ua: u });
                                      else {
                                          var x = a.containerId,
                                              w = n[y],
                                              B = { Ua: u };
                                          R(23);
                                          if (w) {
                                              B = B || {};
                                              var z = wl(yl, B, x),
                                                  D = {};
                                              void 0 !== B.Ua ? (D.receiver = B.Ua) : (D.replace = w);
                                              D.ga_wpid = x;
                                              D.destination = w;
                                              z(2, Ca(), D);
                                          }
                                      }
                      }
                  }
              }
      };
  var Nl = !1;
  function Ol() {
      if (pa(Za.joinAdInterestGroup)) return !0;
      Nl ||
          (Ik(
              "A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
          ),
          (Nl = !0));
      return pa(Za.joinAdInterestGroup);
  }
  function Pl(a, b) {
      var c = void 0;
      try {
          c = I.querySelector('iframe[data-tagging-id="' + b + '"]');
      } catch (e) {}
      if (c) {
          var d = Number(c.dataset.loadTime);
          if (d && 6e4 > Da() - d) {
              Qc("TAGGING", 9);
              return;
          }
      } else
          try {
              if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                  Qc("TAGGING", 10);
                  return;
              }
          } catch (e) {}
      hb(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: Da() }, c);
  }
  var mm = function (a, b, c) {
          this.C = a;
          this.eventName = b;
          this.g = c;
          this.o = {};
          this.metadata = {};
          this.s = !1;
      },
      nm = function (a, b, c) {
          var d = a.g.getWithConfig(b);
          void 0 !== d ? (a.o[b] = d) : void 0 !== c && (a.o[b] = c);
      },
      om = function (a, b, c) {
          var d = we(a.C);
          return d && d.hasOwnProperty(b) ? d[b] : c;
      };
  function pm(a) {
      return {
          getDestinationId: function () {
              return a.C;
          },
          getEventName: function () {
              return a.eventName;
          },
          setEventName: function (b) {
              return void (a.eventName = b);
          },
          getHitData: function (b) {
              return a.o[b];
          },
          setHitData: function (b, c) {
              return void (a.o[b] = c);
          },
          setHitDataIfNotDefined: function (b, c) {
              void 0 === a.o[b] && (a.o[b] = c);
          },
          copyToHitData: function (b, c) {
              nm(a, b, c);
          },
          getMetadata: function (b) {
              return a.metadata[b];
          },
          setMetadata: function (b, c) {
              return void (a.metadata[b] = c);
          },
          abort: function () {
              return void (a.s = !0);
          },
          getProcessedEvent: function () {
              return a;
          },
      };
  }
  var dn = function () {
          var a = !0;
          (cl(7) && cl(9) && cl(10)) || (a = !1);
          return a;
      },
      en = function () {
          var a = !0;
          (cl(3) && cl(4)) || (a = !1);
          return a;
      };
  var jn = function (a, b) {},
      kn = function (a, b) {
          var c = a[Q.Ec],
              d = b + ".",
              e = a[Q.O] || "",
              f = void 0 === c ? !!a.use_anchor : "fragment" === c,
              g = !!a[Q.Ub];
          e = String(e).replace(/\s+/g, "").split(",");
          var l = tj();
          l(d + "require", "linker");
          l(d + "linker:autoLink", e, f, g);
      },
      on = function (a, b, c) {
          if (id() && (!c.isGtmEvent || !ln[a])) {
              var d = !vd(Q.M),
                  e = function (f) {
                      var g,
                          l,
                          m = tj(),
                          n = mn(b, "", c),
                          p,
                          q = n.createOnlyFields._useUp;
                      if (c.isGtmEvent || nn(b, n.createOnlyFields)) {
                          c.isGtmEvent && ((g = "gtm" + je()), (l = n.createOnlyFields), n.gtmTrackerName && (l.name = g));
                          m(function () {
                              var t = m.getByName(b);
                              t && (p = t.get("clientId"));
                              c.isGtmEvent || m.remove(b);
                          });
                          m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                          d &&
                              vd(Q.M) &&
                              ((d = !1),
                              m(function () {
                                  var t = tj().getByName(c.isGtmEvent ? g : b);
                                  !t ||
                                      (t.get("clientId") == p && q) ||
                                      (c.isGtmEvent ? ((n.fieldsToSet["&gcu"] = "1"), (n.fieldsToSet["&gcut"] = Q.de[f])) : ((n.fieldsToSend["&gcu"] = "1"), (n.fieldsToSend["&gcut"] = Q.de[f])),
                                      t.set(n.fieldsToSet),
                                      c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend));
                              }));
                          c.isGtmEvent &&
                              m(function () {
                                  m.remove(g);
                              });
                      }
                  };
              xd(function () {
                  return e(Q.M);
              }, Q.M);
              xd(function () {
                  return e(Q.D);
              }, Q.D);
              c.isGtmEvent && (ln[a] = !0);
          }
      },
      pn = function (a, b) {
          ek() && b && (a[Q.sb] = b);
      },
      yn = function (a, b, c) {
          function d() {
              var G = c.getWithConfig(Q.Rb);
              l(function () {
                  if (!c.isGtmEvent && ub(G)) {
                      var M = u.fieldsToSend,
                          P = m().getByName(n),
                          O;
                      for (O in G)
                          if (G.hasOwnProperty(O) && /^(dimension|metric)\d+$/.test(O) && void 0 != G[O]) {
                              var L = P.get(hn(G[O]));
                              qn(M, O, L);
                          }
                  }
              });
          }
          function e() {
              if (u.displayfeatures) {
                  var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                  p("require", "displayfeatures", void 0, { cookieName: G });
              }
          }
          var f = a,
              g = "https://www.google-analytics.com/analytics.js",
              l = c.isGtmEvent ? vj(c.getWithConfig("gaFunctionName")) : vj();
          if (pa(l)) {
              var m = tj,
                  n;
              c.isGtmEvent ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName")) : (n = "gtag_" + f.split("-").join("_"));
              var p = function (G) {
                      var M = [].slice.call(arguments, 0);
                      M[0] = n ? n + "." + M[0] : "" + M[0];
                      l.apply(window, M);
                  },
                  q = function (G) {
                      var M = function (S, ka) {
                              for (var oa = 0; ka && oa < ka.length; oa++) p(S, ka[oa]);
                          },
                          P = c.isGtmEvent,
                          O = P ? rn(u) : sn(b, c);
                      if (O) {
                          var L = {};
                          pn(L, G);
                          p("require", "ec", "ec.js", L);
                          P && O.Ve && p("set", "&cu", O.Ve);
                          var U = O.action;
                          if (P || "impressions" === U) if ((M("ec:addImpression", O.Wg), !P)) return;
                          if ("promo_click" === U || "promo_view" === U || (P && O.Xc)) {
                              var W = O.Xc;
                              M("ec:addPromo", W);
                              if (W && 0 < W.length && "promo_click" === U) {
                                  P ? p("ec:setAction", U, O.ib) : p("ec:setAction", U);
                                  return;
                              }
                              if (!P) return;
                          }
                          "promo_view" !== U && "impressions" !== U && (M("ec:addProduct", O.Fb), p("ec:setAction", U, O.ib));
                      }
                  },
                  r = function (G) {
                      if (G) {
                          var M = {};
                          if (ub(G)) for (var P in tn) tn.hasOwnProperty(P) && un(tn[P], P, G[P], M);
                          pn(M, x);
                          p("require", "linkid", M);
                      }
                  },
                  t = function () {
                      if (fk()) {
                      } else {
                          var G = c.getWithConfig(Q.Vh);
                          G && (p("require", G, { dataLayer: Yd.Z }), p("require", "render"));
                      }
                  },
                  u = mn(n, b, c),
                  v = function (G, M, P) {
                      P && (M = "" + M);
                      u.fieldsToSend[G] = M;
                  };
              !c.isGtmEvent &&
                  nn(n, u.createOnlyFields) &&
                  (l(function () {
                      m() && m().remove(n);
                  }),
                  (vn[n] = !1));
              l("create", f, u.createOnlyFields);
              if (u.createOnlyFields[Q.sb] && !c.isGtmEvent) {
                  var y = ck(u.createOnlyFields[Q.sb], "/analytics.js");
                  y && (g = y);
              }
              var x = c.isGtmEvent ? u.fieldsToSet[Q.sb] : u.createOnlyFields[Q.sb];
              if (x) {
                  var w = c.isGtmEvent ? u.fieldsToSet[Q.od] : u.createOnlyFields[Q.od];
                  w && !vn[n] && ((vn[n] = !0), l(zj(n, w)));
              }
              c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
              var B = u[Q.la];
              B && B[Q.O] && kn(B, n);
              p("set", u.fieldsToSet);
              if (c.isGtmEvent) {
                  if (u.enableLinkId) {
                      var z = {};
                      pn(z, x);
                      p("require", "linkid", "linkid.js", z);
                  }
                  id() && on(f, n, c);
              }
              if (b === Q.qc)
                  if (c.isGtmEvent) {
                      e();
                      if (u.remarketingLists) {
                          var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                          p("require", "adfeatures", { cookieName: D });
                      }
                      q(x);
                      p("send", "pageview");
                      u.createOnlyFields._useUp && wj(n + ".");
                  } else t(), p("send", "pageview", u.fieldsToSend);
              else
                  b === Q.za
                      ? (t(),
                        Fl(f, c),
                        c.getWithConfig(Q.Ta) && (ih(["aw", "dc"]), wj(n + ".")),
                        0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
                        on(f, n, c),
                        !c.isGtmEvent && 0 < c.getEventModelKeys().length && (R(68), 1 < T.configCount && R(69)))
                      : b === Q.Ga
                      ? jn(n, c)
                      : "screen_view" === b
                      ? p("send", "screenview", u.fieldsToSend)
                      : "timing_complete" === b
                      ? ((u.fieldsToSend.hitType = "timing"),
                        v("timingCategory", u.eventCategory, !0),
                        c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0),
                        v("timingValue", xa(u.value)),
                        void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
                        p("send", u.fieldsToSend))
                      : "exception" === b
                      ? p("send", "exception", u.fieldsToSend)
                      : ("" === b && c.isGtmEvent) ||
                        ("track_social" === b && c.isGtmEvent
                            ? ((u.fieldsToSend.hitType = "social"), v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0))
                            : ((c.isGtmEvent || wn[b]) && q(x),
                              c.isGtmEvent && e(),
                              (u.fieldsToSend.hitType = "event"),
                              v("eventCategory", u.eventCategory, !0),
                              v("eventAction", u.eventAction || b, !0),
                              void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                              void 0 !== u.value && v("eventValue", xa(u.value))),
                        p("send", u.fieldsToSend));
              var E = !1;
              var F = xn;
              E && (F = c.getContainerTypeLoaded("UA"));
              if (!F && !c.isGtmEvent) {
                  xn = !0;
                  E && c.setContainerTypeLoaded("UA", !0);
                  oj();
                  var C = function () {
                          E && c.setContainerTypeLoaded("UA", !1);
                          c.onFailure();
                      },
                      J = function () {
                          m().loaded || C();
                      };
                  fk() ? K(J) : fb(g, J, C);
              }
          } else K(c.onFailure);
      },
      zn = function (a, b, c, d) {
          yd(
              function () {
                  yn(a, b, d);
              },
              [Q.M, Q.D]
          );
      },
      Bn = function (a, b) {
          function c(f) {
              function g(p, q) {
                  for (var r = 0; r < q.length; r++) {
                      var t = q[r];
                      if (f[t]) {
                          m[p] = f[t];
                          break;
                      }
                  }
              }
              function l() {
                  if (f.category) m.category = f.category;
                  else {
                      for (var p = "", q = 0; q < An.length; q++) void 0 !== f[An[q]] && (p && (p += "/"), (p += f[An[q]]));
                      p && (m.category = p);
                  }
              }
              var m = N(f),
                  n = !1;
              if (n || b)
                  g("id", ["id", "item_id", "promotion_id"]),
                      g("name", ["name", "item_name", "promotion_name"]),
                      g("brand", ["brand", "item_brand"]),
                      g("variant", ["variant", "item_variant"]),
                      g("list", ["list_name", "item_list_name"]),
                      g("position", ["list_position", "creative_slot", "index"]),
                      l();
              g("listPosition", ["list_position"]);
              g("creative", ["creative_name"]);
              g("list", ["list_name"]);
              g("position", ["list_position", "creative_slot"]);
              return m;
          }
          b = void 0 === b ? !1 : b;
          for (var d = [], e = 0; a && e < a.length; e++) a[e] && ub(a[e]) && d.push(c(a[e]));
          return d.length ? d : void 0;
      },
      Cn = function (a) {
          return vd(a);
      },
      Dn = !1;
  var xn,
      vn = {},
      ln = {},
      En = {},
      fn = Object.freeze(
          ((En.client_storage = "storage"),
          (En.sample_rate = 1),
          (En.site_speed_sample_rate = 1),
          (En.store_gac = 1),
          (En.use_amp_client_id = 1),
          (En[Q.na] = 1),
          (En[Q.ja] = "storeGac"),
          (En[Q.ka] = 1),
          (En[Q.oa] = 1),
          (En[Q.Ha] = 1),
          (En[Q.Pb] = 1),
          (En[Q.$a] = 1),
          (En[Q.rb] = 1),
          En)
      ),
      Fn = {},
      Gn = Object.freeze(
          ((Fn._cs = 1),
          (Fn._useUp = 1),
          (Fn.allowAnchor = 1),
          (Fn.allowLinker = 1),
          (Fn.alwaysSendReferrer = 1),
          (Fn.clientId = 1),
          (Fn.cookieDomain = 1),
          (Fn.cookieExpires = 1),
          (Fn.cookieFlags = 1),
          (Fn.cookieName = 1),
          (Fn.cookiePath = 1),
          (Fn.cookieUpdate = 1),
          (Fn.legacyCookieDomain = 1),
          (Fn.legacyHistoryImport = 1),
          (Fn.name = 1),
          (Fn.sampleRate = 1),
          (Fn.siteSpeedSampleRate = 1),
          (Fn.storage = 1),
          (Fn.storeGac = 1),
          (Fn.useAmpClientId = 1),
          (Fn._cd2l = 1),
          Fn)
      ),
      Hn = Object.freeze({ anonymize_ip: 1 }),
      In = {},
      gn = Object.freeze(
          ((In.campaign = { content: "campaignContent", id: "campaignId", medium: "campaignMedium", name: "campaignName", source: "campaignSource", term: "campaignKeyword" }),
          (In.app_id = 1),
          (In.app_installer_id = 1),
          (In.app_name = 1),
          (In.app_version = 1),
          (In.description = "exDescription"),
          (In.fatal = "exFatal"),
          (In.language = 1),
          (In.page_hostname = "hostname"),
          (In.transport_type = "transport"),
          (In[Q.da] = "currencyCode"),
          (In[Q.Tf] = 1),
          (In[Q.eb] = "location"),
          (In[Q.Be] = "page"),
          (In[Q.fb] = "referrer"),
          (In[Q.rd] = "title"),
          (In[Q.$f] = 1),
          (In[Q.Ja] = 1),
          In)
      ),
      Jn = {},
      Kn = Object.freeze(((Jn.content_id = 1), (Jn.event_action = 1), (Jn.event_category = 1), (Jn.event_label = 1), (Jn.link_attribution = 1), (Jn.name = 1), (Jn[Q.la] = 1), (Jn[Q.Sf] = 1), (Jn[Q.Ca] = 1), (Jn[Q.fa] = 1), Jn)),
      Ln = Object.freeze({
          displayfeatures: 1,
          enableLinkId: 1,
          enableRecaptcha: 1,
          eventAction: 1,
          eventCategory: 1,
          eventLabel: 1,
          gaFunctionName: 1,
          gtmEcommerceData: 1,
          gtmTrackerName: 1,
          linker: 1,
          remarketingLists: 1,
          socialAction: 1,
          socialNetwork: 1,
          socialTarget: 1,
          timingVar: 1,
          value: 1,
      }),
      An = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
      Mn = {},
      tn = Object.freeze(((Mn.levels = 1), (Mn[Q.oa] = "duration"), (Mn[Q.Pb] = 1), Mn)),
      Nn = {},
      On = Object.freeze(((Nn.anonymize_ip = 1), (Nn.fatal = 1), (Nn.send_page_view = 1), (Nn.store_gac = 1), (Nn.use_amp_client_id = 1), (Nn[Q.ja] = 1), (Nn[Q.Tf] = 1), Nn)),
      un = function (a, b, c, d) {
          if (void 0 !== c)
              if ((On[b] && (c = za(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a)) d[hn(b)] = c;
              else if (k(a)) d[a] = c;
              else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
      },
      hn = function (a) {
          return a && k(a)
              ? a.replace(/(_[a-z])/g, function (b) {
                    return b[1].toUpperCase();
                })
              : a;
      },
      Pn = {},
      wn = Object.freeze(
          ((Pn.checkout_progress = 1), (Pn.select_content = 1), (Pn.set_checkout_option = 1), (Pn[Q.Lb] = 1), (Pn[Q.Mb] = 1), (Pn[Q.ob] = 1), (Pn[Q.pb] = 1), (Pn[Q.Nb] = 1), (Pn[Q.xa] = 1), (Pn[Q.Ob] = 1), (Pn[Q.ya] = 1), Pn)
      ),
      Qn = {},
      Rn = Object.freeze(((Qn.checkout_progress = 1), (Qn.set_checkout_option = 1), (Qn[Q.Gf] = 1), (Qn[Q.Lb] = 1), (Qn[Q.Mb] = 1), (Qn[Q.ob] = 1), (Qn[Q.xa] = 1), (Qn[Q.Ob] = 1), (Qn[Q.Hf] = 1), Qn)),
      Sn = {},
      Tn = Object.freeze(((Sn.generate_lead = 1), (Sn.login = 1), (Sn.search = 1), (Sn.select_content = 1), (Sn.share = 1), (Sn.sign_up = 1), (Sn.view_search_results = 1), (Sn[Q.pb] = 1), (Sn[Q.Nb] = 1), (Sn[Q.ya] = 1), Sn)),
      Un = function (a) {
          var b = "general";
          Rn[a] ? (b = "ecommerce") : Tn[a] ? (b = "engagement") : "exception" === a && (b = "error");
          return b;
      },
      Vn = {},
      Wn = Object.freeze(((Vn.view_search_results = 1), (Vn[Q.pb] = 1), (Vn[Q.Nb] = 1), (Vn[Q.ya] = 1), Vn)),
      qn = function (a, b, c) {
          a.hasOwnProperty(b) || (a[b] = c);
      },
      Xn = function (a) {
          if (ra(a)) {
              for (var b = [], c = 0; c < a.length; c++) {
                  var d = a[c];
                  if (void 0 != d) {
                      var e = d.id,
                          f = d.variant;
                      void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
                  }
              }
              return 0 < b.length ? b.join("!") : void 0;
          }
      },
      mn = function (a, b, c) {
          var d = function (J) {
                  return c.getWithConfig(J);
              },
              e = {},
              f = {},
              g = {},
              l = {},
              m = Xn(d(Q.Uh));
          !c.isGtmEvent && m && qn(f, "exp", m);
          g["&gtm"] = Dk(!0);
          id() && (l._cs = Cn);
          var n = d(Q.Rb);
          if (!c.isGtmEvent && ub(n))
              for (var p in n)
                  if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                      var q = d(String(n[p]));
                      void 0 !== q && qn(f, p, q);
                  }
          for (var r = c.getTopLevelKeys(), t = 0; t < r.length; ++t) {
              var u = r[t];
              if (c.isGtmEvent) {
                  var v = d(u);
                  Ln.hasOwnProperty(u) ? (e[u] = v) : Gn.hasOwnProperty(u) ? (l[u] = v) : (g[u] = v);
              } else {
                  var y = void 0;
                  y = u !== Q.N ? d(u) : c.getMergedValues(u);
                  if (Kn.hasOwnProperty(u)) un(Kn[u], u, y, e);
                  else if (Hn.hasOwnProperty(u)) un(Hn[u], u, y, g);
                  else if (gn.hasOwnProperty(u)) un(gn[u], u, y, f);
                  else if (fn.hasOwnProperty(u)) un(fn[u], u, y, l);
                  else if (/^(dimension|metric|content_group)\d+$/.test(u)) un(1, u, y, f);
                  else if (u === Q.N) {
                      if (!Dn) {
                          var x = Ma(y);
                          x && (f["&did"] = x);
                      }
                      var w = void 0,
                          B = void 0;
                      b === Q.za ? (w = Ma(c.getMergedValues(u), ".")) : ((w = Ma(c.getMergedValues(u, 1), ".")), (B = Ma(c.getMergedValues(u, 2), ".")));
                      w && (f["&gdid"] = w);
                      B && (f["&edid"] = B);
                  } else u === Q.Ba && 0 > r.indexOf(Q.Pb) && (l.cookieName = y + "_ga");
              }
          }
          (!1 !== d(Q.Mh) && !1 !== d(Q.sc) && dn()) || (g.allowAdFeatures = !1);
          (!1 !== d(Q.U) && en()) || (g.allowAdPersonalizationSignals = !1);
          !c.isGtmEvent && d(Q.Ta) && (l._useUp = !0);
          if (c.isGtmEvent) {
              l.name = l.name || e.gtmTrackerName;
              var z = g.hitCallback;
              g.hitCallback = function () {
                  pa(z) && z();
                  c.onSuccess();
              };
          } else {
              qn(l, "cookieDomain", "auto");
              qn(g, "forceSSL", !0);
              qn(e, "eventCategory", Un(b));
              Wn[b] && qn(f, "nonInteraction", !0);
              "login" === b || "sign_up" === b || "share" === b ? qn(e, "eventLabel", d(Q.Sf)) : "search" === b || "view_search_results" === b ? qn(e, "eventLabel", d(Q.ai)) : "select_content" === b && qn(e, "eventLabel", d(Q.Qh));
              var D = e[Q.la] || {},
                  E = D[Q.Tb];
              E || (0 != E && D[Q.O]) ? (l.allowLinker = !0) : !1 === E && qn(l, "useAmpClientId", !1);
              f.hitCallback = c.onSuccess;
              l.name = a;
          }
          id() && ((g["&gcs"] = wd()), vd(Q.M) || (l.storage = "none"), vd(Q.D) || ((g.allowAdFeatures = !1), (l.storeGac = !1)));
          var F = d(Q.V) || d(Q.sb),
              C = d(Q.od);
          F && (c.isGtmEvent || (l[Q.sb] = F), (l._cd2l = !0));
          C && !c.isGtmEvent && (l[Q.od] = C);
          e.fieldsToSend = f;
          e.fieldsToSet = g;
          e.createOnlyFields = l;
          return e;
      },
      rn = function (a) {
          var b = a.gtmEcommerceData;
          if (!b) return null;
          var c = {};
          b.currencyCode && (c.Ve = b.currencyCode);
          if (b.impressions) {
              c.action = "impressions";
              var d = b.impressions;
              c.Wg = "impressions" === b.translateIfKeyEquals ? Bn(d, !0) : d;
          }
          if (b.promoView) {
              c.action = "promo_view";
              var e = b.promoView.promotions;
              c.Xc = "promoView" === b.translateIfKeyEquals ? Bn(e, !0) : e;
          }
          if (b.promoClick) {
              c.action = "promo_click";
              var f = b.promoClick.promotions;
              c.Xc = "promoClick" === b.translateIfKeyEquals ? Bn(f, !0) : f;
              c.ib = b.promoClick.actionField;
              return c;
          }
          for (var g in b)
              if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                  c.action = g;
                  var l = b[g].products;
                  c.Fb = "products" === b.translateIfKeyEquals ? Bn(l, !0) : l;
                  c.ib = b[g].actionField;
                  break;
              }
          return Object.keys(c).length ? c : null;
      },
      sn = function (a, b) {
          function c(t) {
              return { id: d(Q.Sa), affiliation: d(Q.Rh), revenue: d(Q.fa), tax: d(Q.Nf), shipping: d(Q.ue), coupon: d(Q.Sh), list: d(Q.te) || t };
          }
          for (
              var d = function (t) {
                      return b.getWithConfig(t);
                  },
                  e = d(Q.X),
                  f,
                  g = 0;
              e && g < e.length && !(f = e[g][Q.te]);
              g++
          );
          var l = d(Q.Rb);
          if (ub(l))
              for (var m = 0; e && m < e.length; ++m) {
                  var n = e[m],
                      p;
                  for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && qn(n, p, n[l[p]]);
              }
          var q = null,
              r = d(Q.Th);
          a === Q.xa || a === Q.Ob
              ? (q = { action: a, ib: c(), Fb: Bn(e) })
              : a === Q.Lb
              ? (q = { action: "add", Fb: Bn(e) })
              : a === Q.Mb
              ? (q = { action: "remove", Fb: Bn(e) })
              : a === Q.ya
              ? (q = { action: "detail", ib: c(f), Fb: Bn(e) })
              : a === Q.pb
              ? (q = { action: "impressions", Wg: Bn(e) })
              : "view_promotion" === a
              ? (q = { action: "promo_view", Xc: Bn(r) })
              : "select_content" === a && r && 0 < r.length
              ? (q = { action: "promo_click", Xc: Bn(r) })
              : "select_content" === a
              ? (q = { action: "click", ib: { list: d(Q.te) || f }, Fb: Bn(e) })
              : a === Q.ob || "checkout_progress" === a
              ? (q = { action: "checkout", Fb: Bn(e), ib: { step: a === Q.ob ? 1 : d(Q.Mf), option: d(Q.Lf) } })
              : "set_checkout_option" === a && (q = { action: "checkout_option", ib: { step: d(Q.Mf), option: d(Q.Lf) } });
          q && (q.Ve = d(Q.da));
          return q;
      },
      Yn = {},
      nn = function (a, b) {
          var c = Yn[a];
          Yn[a] = N(b);
          if (!c) return !1;
          for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
          for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
          return !1;
      };
  var Zn = null,
      $n = !1;
  function ao(a) {
      return $n && !a ? (Zn = Zn || new bo()) : (T.gcq = T.gcq || new bo());
  }
  var co = function (a, b, c) {
          ao().register(a, b, c);
      },
      eo = function (a, b, c, d) {
          ao().push("event", [b, a], c, d);
      },
      fo = function (a, b) {
          ao().push("config", [a], b);
      },
      go = function (a, b, c, d) {
          ao().push("get", [a, b], c, d);
      },
      ho = function () {
          var a = Q.V;
          return ao().getGlobalConfigValue && ao().getGlobalConfigValue(a);
      },
      io = {},
      jo = function () {
          this.status = 1;
          this.containerConfig = {};
          this.targetConfig = {};
          this.remoteConfig = {};
          this.o = {};
          this.s = null;
          this.claimed = this.g = !1;
      },
      ko = function (a, b, c, d, e) {
          this.type = a;
          this.s = b;
          this.K = c || "";
          this.g = d;
          this.o = e;
      },
      bo = function () {
          this.o = {};
          this.s = {};
          this.g = [];
          this.C = { AW: !1, UA: !1 };
      },
      lo = function (a, b) {
          var c = sl(b);
          return (a.o[c.containerId] = a.o[c.containerId] || new jo());
      },
      mo = function (a, b, c, d) {
          if (b) {
              var e = sl(b);
              if (e && 1 === lo(a, b).status) {
                  lo(a, b).status = 2;
                  var f = {};
                  Ci &&
                      (f.timeoutId = H.setTimeout(function () {
                          R(38);
                          ei();
                      }, 3e3));
                  a.push("require", [f], e.containerId);
                  io[e.containerId] = Da();
                  if (fk()) {
                  } else 2 === d ? lk(e.containerId, c) : kk(e.containerId, c, !0);
              }
          }
      },
      no = function (a, b, c, d) {
          if (d.K) {
              var e = lo(a, d.K),
                  f = e.s;
              if (f) {
                  var g = N(c),
                      l = N(e.targetConfig[d.K]),
                      m = N(e.containerConfig),
                      n = N(e.remoteConfig),
                      p = N(a.s),
                      q = {};
                  try {
                      q = N(me);
                  } catch (y) {
                      R(72);
                  }
                  var r = pe("gtm.uniqueEventId"),
                      t = sl(d.K).prefix,
                      u = function (y) {
                          Pi(r, t, y);
                          var x = g[Q.Sb];
                          x && K(x);
                      },
                      v = wk(
                          vk(
                              xk(
                                  uk(sk(rk(tk(qk(pk(ok(g), l), m), n), p), q), function () {
                                      if (u) {
                                          var y = u;
                                          u = void 0;
                                          y("2");
                                      }
                                  }),
                                  function () {
                                      if (u) {
                                          var y = u;
                                          u = void 0;
                                          y("3");
                                      }
                                  }
                              ),
                              function (y, x) {
                                  a.C[y] = x;
                              }
                          ),
                          function (y) {
                              return a.C[y];
                          }
                      );
                  try {
                      Pi(r, t, "1"), Yi(d.type, d.K, v);
                      f(d.K, b, d.s, v);
                  } catch (y) {
                      Pi(r, t, "4");
                  }
              }
          }
      };
  h = bo.prototype;
  h.register = function (a, b, c) {
      var d = lo(this, a);
      if (3 !== d.status) {
          d.s = b;
          d.status = 3;
          c && (N(d.remoteConfig, c), (d.remoteConfig = c));
          var e = sl(a),
              f = io[e.containerId];
          if (void 0 !== f) {
              var g = T[e.containerId].bootstrap,
                  l = e.prefix.toUpperCase();
              T[e.containerId]._spx && (l = l.toLowerCase());
              var m = pe("gtm.uniqueEventId"),
                  n = l,
                  p = Da() - g;
              if (Ci && !ji[m]) {
                  m !== fi && (ai(), (fi = m));
                  var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                  qi = qi ? qi + "," + q : "&cl=" + q;
              }
              delete io[e.containerId];
          }
          this.flush();
      }
  };
  h.notifyContainerLoaded = function (a, b) {
      var c = this,
          d = function (f) {
              if (sl(f)) {
                  var g = lo(c, f);
                  g.status = 3;
                  g.claimed = !0;
              }
          };
      d(a);
      for (var e = 0; e < b.length; e++) d(b[e]);
      this.flush();
  };
  h.push = function (a, b, c, d) {
      if (void 0 !== c) {
          if (!sl(c)) return;
          mo(this, c, b[0][Q.V] || this.s[Q.V], "event" === a ? 2 : 1);
          lo(this, c).g && (d = !1);
      }
      this.g.push(new ko(a, Math.floor(Da() / 1e3), c, b, d));
      d || this.flush();
  };
  h.insert = function (a, b, c) {
      var d = Math.floor(Da() / 1e3);
      0 < this.g.length ? this.g.splice(1, 0, new ko(a, d, c, b, !1)) : this.g.push(new ko(a, d, c, b, !1));
  };
  h.flush = function (a) {
      for (var b = this, c = [], d = !1, e = {}; this.g.length; ) {
          var f = this.g[0];
          if (f.o) !f.K || lo(this, f.K).g ? ((f.o = !1), this.g.push(f)) : c.push(f), this.g.shift();
          else {
              var g = void 0;
              switch (f.type) {
                  case "require":
                      g = lo(this, f.K);
                      if (3 !== g.status && !a) {
                          this.g.push.apply(this.g, c);
                          return;
                      }
                      Ci && H.clearTimeout(f.g[0].timeoutId);
                      break;
                  case "set":
                      A(f.g[0], function (r, t) {
                          N(Ja(r, t), b.s);
                      });
                      break;
                  case "config":
                      g = lo(this, f.K);
                      if (g.claimed) break;
                      e.Oa = {};
                      A(
                          f.g[0],
                          (function (r) {
                              return function (t, u) {
                                  N(Ja(t, u), r.Oa);
                              };
                          })(e)
                      );
                      var l = !!e.Oa[Q.xd];
                      delete e.Oa[Q.xd];
                      var m = sl(f.K),
                          n = m.containerId === m.id;
                      l || (n ? (g.containerConfig = {}) : (g.targetConfig[f.K] = {}));
                      (g.g && l) || no(this, Q.za, e.Oa, f);
                      g.g = !0;
                      delete e.Oa[Q.ub];
                      n ? N(e.Oa, g.containerConfig) : (N(e.Oa, g.targetConfig[f.K]), R(70));
                      d = !0;
                      break;
                  case "event":
                      g = lo(this, f.K);
                      if (g.claimed) break;
                      e.dd = {};
                      A(
                          f.g[0],
                          (function (r) {
                              return function (t, u) {
                                  N(Ja(t, u), r.dd);
                              };
                          })(e)
                      );
                      no(this, f.g[1], e.dd, f);
                      break;
                  case "get":
                      if (((g = lo(this, f.K)), !g.claimed)) {
                          var p = {},
                              q = ((p[Q.Ia] = f.g[0]), (p[Q.Qa] = f.g[1]), p);
                          no(this, Q.Ga, q, f);
                      }
              }
              this.g.shift();
              oo(this, f);
          }
          e = { Oa: e.Oa, dd: e.dd };
      }
      this.g.push.apply(this.g, c);
      d && this.flush();
  };
  var oo = function (a, b) {
      if ("require" !== b.type)
          if (b.K) for (var c = a.getCommandListeners(b.K)[b.type] || [], d = 0; d < c.length; d++) c[d]();
          else
              for (var e in a.o)
                  if (a.o.hasOwnProperty(e)) {
                      var f = a.o[e];
                      if (f && f.o) for (var g = f.o[b.type] || [], l = 0; l < g.length; l++) g[l]();
                  }
  };
  bo.prototype.getRemoteConfig = function (a) {
      return lo(this, a).remoteConfig;
  };
  bo.prototype.getCommandListeners = function (a) {
      return lo(this, a).o;
  };
  bo.prototype.getGlobalConfigValue = function (a) {
      return this.s[a];
  };
  var po = [Q.Kb, Q.Wb, Q.Dd],
      ro = function (a, b) {
          return 1 === arguments.length ? qo("config", a) : qo("config", a, b);
      },
      so = function (a, b, c) {
          c = c || {};
          c[Q.tb] = a;
          if ("G" === a.split("-")[0]) for (var d in c) "_" === d[0] && -1 === po.indexOf(d) && delete c[d];
          return qo("event", b, c);
      };
  function qo(a) {
      return arguments;
  }
  var uo = function (a) {
      if (to(a)) return a;
      this.g = a;
  };
  uo.prototype.getUntrustedMessageValue = function () {
      return this.g;
  };
  var to = function (a) {
          return !a || "object" !== sb(a) || ub(a) ? !1 : "getUntrustedMessageValue" in a;
      },
      vo = function (a) {
          if (to(a)) return a.getUntrustedMessageValue();
      };
  uo.prototype.getUntrustedMessageValue = uo.prototype.getUntrustedMessageValue;
  var wo = function () {
      this.g = [];
      this.o = [];
  };
  wo.prototype.push = function (a, b, c) {
      var d = this.g.length + 1;
      to(a) && (a = vo(a) || a);
      a["gtm.uniqueEventId"] = b;
      a["gtm.priorityId"] = d;
      a = new uo(a);
      var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d };
      this.g.push(e);
      for (var f = 0; f < this.o.length; f++)
          try {
              this.o[f](e);
          } catch (g) {}
  };
  wo.prototype.enqueue = function (a, b, c) {
      var d = this.g.length + 1;
      to(a) && (a = vo(a) || a);
      a["gtm.uniqueEventId"] = b;
      a["gtm.priorityId"] = d;
      a = new uo(a);
      c.eventId = b;
      c.fromContainerExecution = !0;
      c.fromMessageBus = !0;
      c.priorityId = d;
      var e = { debugContext: c.originatingEntity || {}, message: a, notBeforeEventId: b, priorityId: d, messageContext: c };
      this.g.push(e);
      for (var f = 0; f < this.o.length; f++)
          try {
              this.o[f](e);
          } catch (g) {}
  };
  wo.prototype.listen = function (a) {
      this.o.push(a);
  };
  wo.prototype.get = function () {
      for (var a = {}, b = 0; b < this.g.length; b++) {
          var c = this.g[b],
              d = a[c.notBeforeEventId];
          d || ((d = []), (a[c.notBeforeEventId] = d));
          d.push(c);
      }
      return a;
  };
  var yo = function (a, b, c) {
          xo().push(a, b, c);
      },
      Ao = function () {
          var a = zo;
          xo().listen(a);
      },
      Bo = function (a, b) {
          return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId;
      };
  function xo() {
      var a = T.mb;
      a || ((a = new wo()), (T.mb = a));
      return a;
  }
  var Co = !1;
  var Do = !1;
  var Eo = function (a, b) {
      T.addDestinationToContainer ? T.addDestinationToContainer(a, b) : ((T.pendingDestinationIds = T.pendingDestinationIds || []), T.pendingDestinationIds.push([a, b]));
  };
  var Wo = function (a) {
          var b = T.zones;
          return b
              ? b.getIsAllowedFn(Nh(), a)
              : function () {
                    return !0;
                };
      },
      Xo = function (a) {
          var b = T.zones;
          return b ? b.isActive(Nh(), a) : !0;
      };
  var $o = function (a, b) {
      for (var c = [], d = 0; d < Yb.length; d++)
          if (a[d]) {
              var e = Yb[d];
              var f = mj(b.yb);
              try {
                  var g = Ej(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                  if (g) {
                      var l = c,
                          m = l.push,
                          n = d,
                          p = e["function"];
                      if (!p) throw "Error: No function name given for function call.";
                      var q = $b[p];
                      m.call(l, { nh: n, eh: q ? q.priorityOverride || 0 : 0, execute: g });
                  } else Yo(d, b), f();
              } catch (t) {
                  f();
              }
          }
      c.sort(Zo);
      for (var r = 0; r < c.length; r++) c[r].execute();
      return 0 < c.length;
  };
  function Zo(a, b) {
      var c,
          d = b.eh,
          e = a.eh;
      c = d > e ? 1 : d < e ? -1 : 0;
      var f;
      if (0 !== c) f = c;
      else {
          var g = a.nh,
              l = b.nh;
          f = g > l ? 1 : g < l ? -1 : 0;
      }
      return f;
  }
  function Yo(a, b) {
      if (!Ci) return;
      var c = function (d) {
          var e = b.bf(Yb[d]) ? "3" : "4",
              f = fc(Yb[d][wb.og], b, []);
          f && f.length && c(f[0].index);
          Ii(b.id, Yb[d], e);
          var g = fc(Yb[d][wb.rg], b, []);
          g && g.length && c(g[0].index);
      };
      c(a);
  }
  var cp = !1,
      ap;
  var hp = function (a) {
      var b = Da(),
          c = a["gtm.uniqueEventId"],
          d = a["gtm.priorityId"],
          e = a.event;
      if ("gtm.js" === e) {
          if (cp) return !1;
          cp = !0;
      }
      var l,
          m = !1;
      if (Xo(c)) l = Wo(c);
      else {
          if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
          m = !0;
          l = Wo(Number.MAX_SAFE_INTEGER);
      }
      Hi(c, e);
      var n = a.eventCallback,
          p = a.eventTimeout,
          q = n;
      var r = {
              id: c,
              priorityId: d,
              name: e,
              bf: Kh(l),
              Mj: [],
              Yg: function () {
                  R(6);
              },
              Fg: dp(),
              Gg: ep(c),
              yb: new hj(q, p),
          },
          t = kc(r);
      m && (t = fp(t));
      var u = $o(t, r),
          v = !1;
      nj(r.yb);
      ("gtm.js" !== e && "gtm.sync" !== e) || yj(Lh.F);
      return gp(t, u) || v;
  };
  function ep(a) {
      return function (b) {
          Ci && (vb(b) || Qi(a, "input", b));
      };
  }
  function dp() {
      var a = {};
      a.event = te("event", 1);
      a.ecommerce = te("ecommerce", 1);
      a.gtm = te("gtm");
      a.eventModel = te("eventModel");
      return a;
  }
  function fp(a) {
      for (var b = [], c = 0; c < a.length; c++) a[c] && ($d[String(Yb[c][wb.vb])] && (b[c] = !0), void 0 !== Yb[c][wb.oi] && (b[c] = !0));
      return b;
  }
  function gp(a, b) {
      if (!b) return b;
      for (var c = 0; c < a.length; c++) if (a[c] && Yb[c] && !ae[String(Yb[c][wb.vb])]) return !0;
      return !1;
  }
  var ip = !1;
  var jp = "HA GF G UA AW DC".split(" "),
      kp = !1,
      lp = !1,
      mp = 0;
  function np(a, b) {
      a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: je() });
      b.eventId = a["gtm.uniqueEventId"];
      b.priorityId = a["gtm.priorityId"];
      return { eventId: b.eventId, priorityId: b.priorityId };
  }
  function op(a) {
      delete a[Q.Dd];
      delete a[Q.Kb];
  }
  function pp() {
      return kp;
  }
  var qp = {
          config: function (a, b) {
              np(a, b);
          },
          consent: function (a, b) {
              if (3 === a.length) {
                  R(39);
                  var c = np(a, b),
                      d = a[1];
                  "default" === d ? sd(a[2]) : "update" === d && ud(a[2], c);
              }
          },
          event: function (a, b) {
              var c = a[1];
              if (!(2 > a.length) && k(c)) {
                  var d;
                  if (2 < a.length) {
                      if ((!ub(a[2]) && void 0 != a[2]) || 3 < a.length) return;
                      d = a[2];
                  }
                  var e = d,
                      f = {},
                      g = ((f.event = c), f);
                  e && ((g.eventModel = N(e)), e[Q.Sb] && (g.eventCallback = e[Q.Sb]), e[Q.nd] && (g.eventTimeout = e[Q.nd]));
                  var l = !1,
                      m = !1;
                  d && (d[Q.Dd] && 0 === Lh.F.indexOf("GTM") && (l = !0), d[Q.Kb] && (m = !0), op(g.eventModel));
                  b.noGtmEvent && 0 === Lh.F.indexOf("GTM") && (l = !0);
                  b.deferrable && (m = !0);
                  var n = np(a, b),
                      p = n.priorityId;
                  g["gtm.uniqueEventId"] = n.eventId;
                  p && (g["gtm.priorityId"] = p);
                  return l ? void 0 : g;
              }
          },
          get: function (a, b) {},
          js: function (a, b) {
              if (2 == a.length && a[1].getTime) {
                  lp = !0;
                  pp();
                  var c = np(a, b),
                      d = c.eventId,
                      e = c.priorityId,
                      f = {};
                  return (f.event = "gtm.js"), (f["gtm.start"] = a[1].getTime()), (f["gtm.uniqueEventId"] = d), (f["gtm.priorityId"] = e), f;
              }
          },
          policy: function () {},
          set: function (a, b) {
              var c;
              2 == a.length && ub(a[1]) ? (c = N(a[1])) : 3 == a.length && k(a[1]) && ((c = {}), ub(a[2]) || ra(a[2]) ? (c[a[1]] = N(a[2])) : (c[a[1]] = a[2]));
              if (c) {
                  var d = np(a, b),
                      e = d.eventId,
                      f = d.priorityId;
                  c._clear = !0;
                  return c;
              }
          },
      },
      Pp = { policy: !0 };
  var Qp = function (a) {
          var b = H[Yd.Z].hide;
          if (b && void 0 !== b[a] && b.end) {
              b[a] = !1;
              var c = !0,
                  d;
              for (d in b)
                  if (b.hasOwnProperty(d) && !0 === b[d]) {
                      c = !1;
                      break;
                  }
              c && (b.end(), (b.end = null));
          }
      },
      Rp = function (a) {
          var b = H[Yd.Z],
              c = b && b.hide;
          c && c.end && (c[a] = !0);
      };
  var Sp = !1,
      Tp = [];
  function Up() {
      if (!Sp) {
          Sp = !0;
          for (var a = 0; a < Tp.length; a++) K(Tp[a]);
      }
  }
  var Vp = function (a) {
      Sp ? K(a) : Tp.push(a);
  };
  var kq = 0,
      lq = {},
      mq = [],
      nq = [],
      oq = !1,
      pq = !1,
      qq = function (a) {
          return H[Yd.Z].push(a);
      },
      rq = function (a, b) {
          var c = T[Yd.Z],
              d = c ? c.subscribers : 1,
              e = 0,
              f = !1,
              g = void 0;
          b &&
              (g = H.setTimeout(function () {
                  f || ((f = !0), a());
                  g = void 0;
              }, b));
          return function () {
              ++e === d && (g && (H.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
          };
      };
  function sq(a) {
      var b = a._clear;
      A(a, function (d, e) {
          "_clear" !== d && (b && se(d), se(d, e));
      });
      fe || (fe = a["gtm.start"]);
      var c = a["gtm.uniqueEventId"];
      if (!a.event) return !1;
      c || ((c = je()), (a["gtm.uniqueEventId"] = c), se("gtm.uniqueEventId", c));
      return hp(a);
  }
  function tq(a) {
      if (null == a || "object" !== typeof a) return !1;
      if (a.event) return !0;
      if (wa(a)) {
          var b = a[0];
          if ("config" === b || "event" === b || "js" === b) return !0;
      }
      return !1;
  }
  function uq() {
      for (var a = !1; !pq && (0 < mq.length || 0 < nq.length); ) {
          if (!oq && tq(mq[0])) {
              var b = {},
                  c = ((b.event = "gtm.init_consent"), b),
                  d = {},
                  e = ((d.event = "gtm.init"), d),
                  f = mq[0]["gtm.uniqueEventId"];
              f && ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
              mq.unshift(c, e);
              oq = !0;
          }
          pq = !0;
          delete me.eventModel;
          oe();
          var p = null,
              q = void 0;
          if (nq.length) {
              var r = nq.shift();
              p = r.message;
              r.messageContext ? (q = r.messageContext) : (q = { eventId: r.notBeforeEventId, priorityId: r.priorityId, originatingEntity: r.debugContext, fromContainerExecution: !0, fromMessageBus: !0 });
          }
          null == p && ((p = mq.shift()), (q = {}));
          if (null != p) {
              var t = to(p);
              if (t) {
                  p = vo(p);
                  q.fromContainerExecution = !0;
                  for (var u = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], v = 0; v < u.length; v++) {
                      var y = u[v],
                          x = pe(y, 1);
                      if (ra(x) || ub(x)) x = N(x);
                      ne[y] = x;
                  }
              }
              try {
                  if (pa(p))
                      try {
                          p.call(qe);
                      } catch (J) {}
                  else if (ra(p)) {
                      var w = p;
                      if (k(w[0])) {
                          var B = w[0].split("."),
                              z = B.pop(),
                              D = w.slice(1),
                              E = pe(B.join("."), 2);
                          if (null != E)
                              try {
                                  E[z].apply(E, D);
                              } catch (J) {}
                      }
                  } else {
                      if (wa(p)) {
                          a: {
                              if (p.length && k(p[0])) {
                                  var F = qp[p[0]];
                                  if (F && (!q.fromContainerExecution || !Pp[p[0]])) {
                                      p = F(p, q);
                                      break a;
                                  }
                              }
                              p = void 0;
                          }
                          if (!p) {
                              pq = !1;
                              continue;
                          }
                      }
                      a = sq(p) || a;
                      if (tq(p)) {
                          var C = p["gtm.uniqueEventId"];
                          void 0 !== C && (vq(C), (kq = C));
                      }
                  }
              } finally {
                  t && oe(!0);
              }
          }
          pq = !1;
      }
      return !a;
  }
  function wq() {
      var b = uq();
      try {
          Qp(Lh.F);
      } catch (c) {}
      return b;
  }
  function zo(a) {
      var b = a.notBeforeEventId;
      kq < b
          ? ((lq[String(b)] = lq[String(b)] || []), lq[String(b)].push(a))
          : (nq.push(a),
            nq.sort(Bo),
            K(function () {
                pq || uq();
            }));
  }
  function vq(a) {
      for (var b = lq[String(a)] || [], c = 0; c < b.length; c++) nq.push(b[c]);
      b.length && nq.sort(Bo);
      delete lq[String(a)];
  }
  var yq = function () {
          var a = ab(Yd.Z, []),
              b = ab("google_tag_manager", {});
          lq = xo().get();
          vq(0);
          Ao();
          b = b[Yd.Z] = b[Yd.Z] || {};
          ej(function () {
              if (!b.gtmDom) {
                  b.gtmDom = !0;
                  var e = {};
                  a.push(((e.event = "gtm.dom"), e));
              }
          });
          Vp(function () {
              if (!b.gtmLoad) {
                  b.gtmLoad = !0;
                  var e = {};
                  a.push(((e.event = "gtm.load"), e));
              }
          });
          b.subscribers = (b.subscribers || 0) + 1;
          var c = a.push;
          a.push = function () {
              var e;
              if (0 < T.SANDBOXED_JS_SEMAPHORE) {
                  e = [];
                  for (var f = 0; f < arguments.length; f++) e[f] = new uo(arguments[f]);
              } else e = [].slice.call(arguments, 0);
              mq.push.apply(mq, e);
              var g = c.apply(a, e);
              if (300 < this.length) for (R(4); 300 < this.length; ) this.shift();
              var l = "boolean" !== typeof g || g;
              return uq() && l;
          };
          var d = a.slice(0);
          mq.push.apply(mq, d);
          if (xq()) {
              K(wq);
          }
      },
      xq = function () {
          var a = !0;
          return a;
      };
  function zq(a) {
      if (null == a || 0 === a.length) return !1;
      var b = Number(a),
          c = Da();
      return b < c + 3e5 && b > c - 9e5;
  }
  var Aq = {};
  Aq.Ad = new String("undefined");
  var Dq = function (a, b, c) {
          var d = { event: b, "gtm.element": a, "gtm.elementClasses": qb(a, "className"), "gtm.elementId": a["for"] || lb(a, "id") || "", "gtm.elementTarget": a.formTarget || qb(a, "target") || "" };
          c && (d["gtm.triggers"] = c.join(","));
          d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || qb(a, "href") || a.src || a.code || a.codebase || "";
          return d;
      },
      Eq = function (a) {
          T.hasOwnProperty("autoEventsSettings") || (T.autoEventsSettings = {});
          var b = T.autoEventsSettings;
          b.hasOwnProperty(a) || (b[a] = {});
          return b[a];
      },
      Fq = function (a, b, c) {
          Eq(a)[b] = c;
      },
      Gq = function (a, b, c, d) {
          var e = Eq(a),
              f = Ea(e, b, d);
          e[b] = c(f);
      },
      Hq = function (a, b, c) {
          var d = Eq(a);
          return Ea(d, b, c);
      };
  var ar = H.clearTimeout,
      br = H.setTimeout,
      V = function (a, b, c, d) {
          if (fk()) {
              b && K(b);
          } else return fb(a, b, c, d);
      },
      cr = function () {
          return new Date();
      },
      dr = function () {
          return H.location.href;
      },
      er = function (a) {
          return Oe(Qe(a), "fragment");
      },
      fr = function (a) {
          return Pe(Qe(a));
      },
      gr = function (a, b) {
          return pe(a, b || 2);
      },
      hr = function (a, b, c) {
          var d;
          b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = qq(a))) : (d = qq(a));
          return d;
      },
      ir = function (a, b) {
          H[a] = b;
      },
      X = function (a, b, c) {
          b && (void 0 === H[a] || (c && !H[a])) && (H[a] = b);
          return H[a];
      },
      jr = function (a, b, c) {
          return uf(a, b, void 0 === c ? !0 : !!c);
      },
      kr = function (a, b, c) {
          return 0 === Df(a, b, c);
      },
      lr = function (a, b) {
          if (fk()) {
              b && K(b);
          } else hb(a, b);
      },
      mr = function (a) {
          return !!Hq(a, "init", !1);
      },
      nr = function (a) {
          Fq(a, "init", !0);
      },
      or = function (a, b, c) {
          Ci && (vb(a) || Qi(c, b, a));
      };
  var Mr = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  function Nr(a, b) {
      a = String(a);
      b = String(b);
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) === c;
  }
  var Or = new ua();
  function Pr(a, b, c) {
      var d = c ? "i" : void 0;
      try {
          var e = String(b) + d,
              f = Or.get(e);
          f || ((f = new RegExp(b, d)), Or.set(e, f));
          return f.test(a);
      } catch (g) {
          return !1;
      }
  }
  function Qr(a, b) {
      function c(g) {
          var l = Qe(g),
              m = Oe(l, "protocol"),
              n = Oe(l, "host", !0),
              p = Oe(l, "port"),
              q = Oe(l, "path").toLowerCase().replace(/\/$/, "");
          if (void 0 === m || ("http" === m && "80" === p) || ("https" === m && "443" === p)) (m = "web"), (p = "default");
          return [m, n, p, q];
      }
      for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
      return !0;
  }
  function Rr(a) {
      return Sr(a) ? 1 : 0;
  }
  function Sr(a) {
      var b = a.arg0,
          c = a.arg1;
      if (a.any_of && Array.isArray(c)) {
          for (var d = 0; d < c.length; d++) {
              var e = N(a, {});
              N({ arg1: c[d], any_of: void 0 }, e);
              if (Rr(e)) return !0;
          }
          return !1;
      }
      switch (a["function"]) {
          case "_cn":
              return 0 <= String(b).indexOf(String(c));
          case "_css":
              var f;
              a: {
                  if (b)
                      try {
                          for (var g = 0; g < Mr.length; g++) {
                              var l = Mr[g];
                              if (b[l]) {
                                  f = b[l](c);
                                  break a;
                              }
                          }
                      } catch (m) {}
                  f = !1;
              }
              return f;
          case "_ew":
              return Nr(b, c);
          case "_eq":
              return String(b) === String(c);
          case "_ge":
              return Number(b) >= Number(c);
          case "_gt":
              return Number(b) > Number(c);
          case "_lc":
              return 0 <= String(b).split(",").indexOf(String(c));
          case "_le":
              return Number(b) <= Number(c);
          case "_lt":
              return Number(b) < Number(c);
          case "_re":
              return Pr(b, c, a.ignore_case);
          case "_sw":
              return 0 === String(b).indexOf(String(c));
          case "_um":
              return Qr(b, c);
      }
      return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var Yr = encodeURI,
      Y = encodeURIComponent,
      Zr = ib;
  var $r = function (a, b) {
          if (!a) return !1;
          var c = Oe(Qe(a), "host");
          if (!c) return !1;
          for (var d = 0; b && d < b.length; d++) {
              var e = b[d] && b[d].toLowerCase();
              if (e) {
                  var f = c.length - e.length;
                  0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
                  if (0 <= f && c.indexOf(e, f) == f) return !0;
              }
          }
          return !1;
      },
      as = function (a, b, c) {
          for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && ((d[a[f][b]] = a[f][c]), (e = !0));
          return e ? d : null;
      };
  function Bt() {
      return (H.gaGlobal = H.gaGlobal || {});
  }
  var Ct = function () {
          var a = Bt();
          a.hid = a.hid || ta();
          return a.hid;
      },
      Dt = function (a, b) {
          var c = Bt();
          if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
      };
  var ju = function () {
      if (pa(H.__uspapi)) {
          var a = "";
          try {
              H.__uspapi("getUSPData", 1, function (b, c) {
                  if (c && b) {
                      var d = b.uspString;
                      d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
                  }
              });
          } catch (b) {}
          return a;
      }
  };
  var Ru = window,
      Su = document,
      Tu = function (a) {
          var b = Ru._gaUserPrefs;
          if ((b && b.ioo && b.ioo()) || (a && !0 === Ru["ga-disable-" + a])) return !0;
          try {
              var c = Ru.external;
              if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
          } catch (f) {}
          for (var d = of("AMP_TOKEN", String(Su.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
          return Su.getElementById("__gaOptOutExtension") ? !0 : !1;
      };
  var Uu = {};
  function bv(a) {
      delete a.eventModel[Q.ub];
      iv(a.eventModel);
  }
  var iv = function (a) {
      A(a, function (c) {
          "_" === c.charAt(0) && delete a[c];
      });
      var b = a[Q.Ka] || {};
      A(b, function (c) {
          "_" === c.charAt(0) && delete b[c];
      });
  };
  var Av = function (a, b, c) {
          eo(b, c, a);
      },
      Bv = function (a, b, c) {
          eo(b, c, a, !0);
      },
      Dv = function (a, b) {};
  function Cv(a, b) {}
  var Z = { h: {} };

  (Z.h.e = ["google"]),
      (function () {
          (function (a) {
              Z.__e = a;
              Z.__e.m = "e";
              Z.__e.isVendorTemplate = !0;
              Z.__e.priorityOverride = 0;
          })(function (a) {
              return String(a.vtp_gtmCachedValues.event);
          });
      })();
  (Z.h.f = ["google"]),
      (function () {
          (function (a) {
              Z.__f = a;
              Z.__f.m = "f";
              Z.__f.isVendorTemplate = !0;
              Z.__f.priorityOverride = 0;
          })(function (a) {
              var b = gr("gtm.referrer", 1) || I.referrer;
              return b ? (a.vtp_component && "URL" != a.vtp_component ? Oe(Qe(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : fr(String(b))) : String(b);
          });
      })();
  (Z.h.cl = ["google"]),
      (function () {
          function a(b) {
              var c = b.target;
              if (c) {
                  var d = Dq(c, "gtm.click");
                  hr(d);
              }
          }
          (function (b) {
              Z.__cl = b;
              Z.__cl.m = "cl";
              Z.__cl.isVendorTemplate = !0;
              Z.__cl.priorityOverride = 0;
          })(function (b) {
              if (!mr("cl")) {
                  var c = X("document");
                  jb(c, "click", a, !0);
                  nr("cl");
              }
              K(b.vtp_gtmOnSuccess);
          });
      })();
  (Z.h.u = ["google"]),
      (function () {
          var a = function (b) {
              return {
                  toString: function () {
                      return b;
                  },
              };
          };
          (function (b) {
              Z.__u = b;
              Z.__u.m = "u";
              Z.__u.isVendorTemplate = !0;
              Z.__u.priorityOverride = 0;
          })(function (b) {
              var c;
              c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : gr("gtm.url", 1)) || dr();
              var d = b[a("vtp_component")];
              if (!d || "URL" == d) return fr(String(c));
              var e = Qe(String(c)),
                  f;
              if ("QUERY" === d)
                  a: {
                      var g = b[a("vtp_multiQueryKeys").toString()],
                          l = b[a("vtp_queryKey").toString()] || "",
                          m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                          n;
                      g ? (ra(l) ? (n = l) : (n = String(l).replace(/\s+/g, "").split(","))) : (n = [String(l)]);
                      for (var p = 0; p < n.length; p++) {
                          var q = Oe(e, "QUERY", void 0, void 0, n[p]);
                          if (void 0 != q && (!m || "" !== q)) {
                              f = q;
                              break a;
                          }
                      }
                      f = void 0;
                  }
              else f = Oe(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
              return f;
          });
      })();
  (Z.h.v = ["google"]),
      (function () {
          (function (a) {
              Z.__v = a;
              Z.__v.m = "v";
              Z.__v.isVendorTemplate = !0;
              Z.__v.priorityOverride = 0;
          })(function (a) {
              var b = a.vtp_name;
              if (!b || !b.replace) return !1;
              var c = gr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                  d = void 0 !== c ? c : a.vtp_defaultValue;
              or(d, "v", a.vtp_gtmEventId);
              return d;
          });
      })();
  (Z.h.ua = ["google"]),
      (function () {
          function a(m, n) {
              for (var p in m)
                  if (!l[p] && m.hasOwnProperty(p)) {
                      var q = g[p] ? za(m[p]) : m[p];
                      "anonymizeIp" != p || q || (q = void 0);
                      n[p] = q;
                  }
          }
          function b(m) {
              var n = {};
              m.vtp_gaSettings && N(as(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
              N(as(m.vtp_fieldsToSet, "fieldName", "value"), n);
              za(n.urlPassthrough) && (n._useUp = !0);
              m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
              return n;
          }
          function c(m, n) {
              return void 0 === n ? n : m(n);
          }
          function d(m, n, p) {}
          function e(m, n) {
              if (!f) {
                  var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                  m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                  f = !0;
                  var q = m.vtp_gtmOnFailure,
                      r = ck(n._x_19, "/analytics.js"),
                      t = hk("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                  V(
                      "analytics.js" === p && r ? r : t,
                      function () {
                          var u = tj();
                          (u && u.loaded) || q();
                      },
                      q
                  );
              }
          }
          var f,
              g = {
                  allowAnchor: !0,
                  allowLinker: !0,
                  alwaysSendReferrer: !0,
                  anonymizeIp: !0,
                  cookieUpdate: !0,
                  exFatal: !0,
                  forceSSL: !0,
                  javaEnabled: !0,
                  legacyHistoryImport: !0,
                  nonInteraction: !0,
                  useAmpClientId: !0,
                  useBeacon: !0,
                  storeGac: !0,
                  allowAdFeatures: !0,
                  allowAdPersonalizationSignals: !0,
                  _cd2l: !0,
              },
              l = { urlPassthrough: !0 };
          (function (m) {
              Z.__ua = m;
              Z.__ua.m = "ua";
              Z.__ua.isVendorTemplate = !0;
              Z.__ua.priorityOverride = 0;
          })(function (m) {
              function n() {
                  if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0;
              }
              var p = {},
                  q = {},
                  r = {};
              if (m.vtp_gaSettings) {
                  var t = m.vtp_gaSettings;
                  N(as(t.vtp_contentGroup, "index", "group"), p);
                  N(as(t.vtp_dimension, "index", "dimension"), q);
                  N(as(t.vtp_metric, "index", "metric"), r);
                  var u = N(t);
                  u.vtp_fieldsToSet = void 0;
                  u.vtp_contentGroup = void 0;
                  u.vtp_dimension = void 0;
                  u.vtp_metric = void 0;
                  m = N(m, u);
              }
              N(as(m.vtp_contentGroup, "index", "group"), p);
              N(as(m.vtp_dimension, "index", "dimension"), q);
              N(as(m.vtp_metric, "index", "metric"), r);
              var v = b(m),
                  y = String(m.vtp_trackingId || ""),
                  x = "",
                  w = "",
                  B = "";
              m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && ((B = m.vtp_trackerName), (w = B + ".")) : ((B = "gtm" + je()), (w = B + "."));
              var z = function (W, S) {
                  for (var ka in S) S.hasOwnProperty(ka) && (v[W + ka] = S[ka]);
              };
              z("contentGroup", p);
              z("dimension", q);
              z("metric", r);
              m.vtp_enableEcommerce && ((x = m.vtp_gtmCachedValues.event), (v.gtmEcommerceData = d(m, v, x)));
              if ("TRACK_EVENT" === m.vtp_trackType)
                  (x = "track_event"), n(), (v.eventCategory = String(m.vtp_eventCategory)), (v.eventAction = String(m.vtp_eventAction)), (v.eventLabel = c(String, m.vtp_eventLabel)), (v.value = c(xa, m.vtp_eventValue));
              else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                  if (((x = Q.qc), n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains)) {
                      var D = {};
                      D[Q.O] = m.vtp_autoLinkDomains;
                      D.use_anchor = m.vtp_useHashAutoLink;
                      D[Q.Ub] = m.vtp_decorateFormsAutoLink;
                      v[Q.la] = D;
                  }
              } else
                  "TRACK_SOCIAL" === m.vtp_trackType
                      ? ((x = "track_social"), (v.socialNetwork = String(m.vtp_socialNetwork)), (v.socialAction = String(m.vtp_socialAction)), (v.socialTarget = String(m.vtp_socialActionTarget)))
                      : "TRACK_TIMING" == m.vtp_trackType &&
                        ((x = "timing_complete"), (v.eventCategory = String(m.vtp_timingCategory)), (v.timingVar = String(m.vtp_timingVar)), (v.value = xa(m.vtp_timingValue)), (v.eventLabel = c(String, m.vtp_timingLabel)));
              m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
              m.vtp_enableLinkId && (v.enableLinkId = !0);
              var E = {};
              a(v, E);
              v.name || (E.gtmTrackerName = B);
              E.gaFunctionName = m.vtp_functionName;
              void 0 !== m.vtp_nonInteraction && (E.nonInteraction = m.vtp_nonInteraction);
              var F = xk(uk(ok(E), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure);
              F.isGtmEvent = !0;
              zn(y, x, Date.now(), F);
              var C = vj(m.vtp_functionName);
              if (pa(C)) {
                  var J = function (W) {
                      var S = [].slice.call(arguments, 0);
                      S[0] = w + S[0];
                      C.apply(window, S);
                  };
                  if ("TRACK_TRANSACTION" == m.vtp_trackType) {
                  } else if ("DECORATE_LINK" == m.vtp_trackType) {
                  } else if ("DECORATE_FORM" == m.vtp_trackType) {
                  } else if ("TRACK_DATA" == m.vtp_trackType) {
                  }
                  e(m, v);
              } else K(m.vtp_gtmOnFailure);
          });
      })();

  (Z.h.aev = ["google"]),
      (function () {
          function a(r, t, u, v, y) {
              y || (y = "element");
              var x = t + "." + u,
                  w;
              if (n.hasOwnProperty(x)) w = n[x];
              else {
                  var B = r[y];
                  if (B && ((w = v(B)), (n[x] = w), p.push(x), 35 < p.length)) {
                      var z = p.shift();
                      delete n[z];
                  }
              }
              return w;
          }
          function b(r, t, u) {
              var v = r[q[t]];
              return void 0 !== v ? v : u;
          }
          function c(r, t) {
              if (!r) return !1;
              var u = d(dr());
              ra(t) ||
                  (t = String(t || "")
                      .replace(/\s+/g, "")
                      .split(","));
              for (var v = [u], y = 0; y < t.length; y++) {
                  var x = t[y];
                  if (x.hasOwnProperty("is_regex"))
                      if (x.is_regex)
                          try {
                              x = new RegExp(x.domain);
                          } catch (z) {
                              continue;
                          }
                      else x = x.domain;
                  var w = d(r);
                  if (x instanceof RegExp) {
                      if (x.test(w)) return !1;
                  } else {
                      var B = x;
                      if (0 != B.length) {
                          if (0 <= w.indexOf(B)) return !1;
                          v.push(d(B));
                      }
                  }
              }
              return !$r(r, v);
          }
          function d(r) {
              m.test(r) || (r = "http://" + r);
              return Oe(Qe(r), "HOST", !0);
          }
          function e(r, t, u, v) {
              switch (r) {
                  case "SUBMIT_TEXT":
                      return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                  case "LENGTH":
                      var y = a(t, u, "FORM." + r, g);
                      return void 0 === y ? v : y;
                  case "INTERACTED_FIELD_ID":
                      return l(t, "id", v);
                  case "INTERACTED_FIELD_NAME":
                      return l(t, "name", v);
                  case "INTERACTED_FIELD_TYPE":
                      return l(t, "type", v);
                  case "INTERACTED_FIELD_POSITION":
                      var x = t.interactedFormFieldPosition;
                      return void 0 === x ? v : x;
                  case "INTERACT_SEQUENCE_NUMBER":
                      var w = t.interactSequenceNumber;
                      return void 0 === w ? v : w;
                  default:
                      return v;
              }
          }
          function f(r) {
              switch (r.tagName.toLowerCase()) {
                  case "input":
                      return lb(r, "value");
                  case "button":
                      return mb(r);
                  default:
                      return null;
              }
          }
          function g(r) {
              if ("form" === r.tagName.toLowerCase() && r.elements) {
                  for (var t = 0, u = 0; u < r.elements.length; u++) Kq(r.elements[u]) && t++;
                  return t;
              }
          }
          function l(r, t, u) {
              var v = r.interactedFormField;
              return (v && lb(v, t)) || u;
          }
          var m = /^https?:\/\//i,
              n = {},
              p = [],
              q = {
                  ATTRIBUTE: "elementAttribute",
                  CLASSES: "elementClasses",
                  ELEMENT: "element",
                  ID: "elementId",
                  HISTORY_CHANGE_SOURCE: "historyChangeSource",
                  HISTORY_NEW_STATE: "newHistoryState",
                  HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                  HISTORY_OLD_STATE: "oldHistoryState",
                  HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                  TARGET: "elementTarget",
              };
          (function (r) {
              Z.__aev = r;
              Z.__aev.m = "aev";
              Z.__aev.isVendorTemplate = !0;
              Z.__aev.priorityOverride = 0;
          })(function (r) {
              var t = r.vtp_gtmEventId,
                  u = r.vtp_defaultValue,
                  v = r.vtp_varType,
                  y = r.vtp_gtmCachedValues.gtm;
              switch (v) {
                  case "TAG_NAME":
                      var x = y.element;
                      return (x && x.tagName) || u;
                  case "TEXT":
                      return a(y, t, v, mb) || u;
                  case "URL":
                      var w;
                      a: {
                          var B = String(y.elementUrl || u || ""),
                              z = Qe(B),
                              D = String(r.vtp_component || "URL");
                          switch (D) {
                              case "URL":
                                  w = B;
                                  break a;
                              case "IS_OUTBOUND":
                                  w = c(B, r.vtp_affiliatedDomains);
                                  break a;
                              default:
                                  w = Oe(z, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey);
                          }
                      }
                      return w;
                  case "ATTRIBUTE":
                      var E;
                      if (void 0 === r.vtp_attribute) E = b(y, v, u);
                      else {
                          var F = y.element;
                          E = (F && lb(F, r.vtp_attribute)) || u || "";
                      }
                      return E;
                  case "MD":
                      var C = r.vtp_mdValue,
                          J = a(y, t, "MD", Wq);
                      return C && J ? Zq(J, C) || u : J || u;
                  case "FORM":
                      return e(String(r.vtp_component || "SUBMIT_TEXT"), y, t, u);
                  default:
                      var G = b(y, v, u);
                      or(G, "aev", r.vtp_gtmEventId);
                      return G;
              }
          });
      })();
  (Z.h.gas = ["google"]),
      (function () {
          (function (a) {
              Z.__gas = a;
              Z.__gas.m = "gas";
              Z.__gas.isVendorTemplate = !0;
              Z.__gas.priorityOverride = 0;
          })(function (a) {
              var b = N(a),
                  c = b;
              c[wb.vb] = null;
              c[wb.Je] = null;
              var d = (b = c);
              d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
              var e = d.vtp_cookieDomain;
              void 0 !== e && (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }), delete d.vtp_cookieDomain);
              return b;
          });
      })();

  var Ev = {};
  Ev.dataLayer = qe;
  Ev.callback = function (a) {
      he.hasOwnProperty(a) && pa(he[a]) && he[a]();
      delete he[a];
  };
  Ev.bootstrap = 0;
  Ev._spx = !1;
  (function (a) {
      if (!H["__TAGGY_INSTALLED"]) {
          var b = !1;
          if (I.referrer) {
              var c = Qe(I.referrer);
              b = "cct.google" === Ne(c, "host");
          }
          if (!b) {
              var d = uf("googTaggyReferrer");
              b = d.length && d[0].length;
          }
          b && ((H["__TAGGY_INSTALLED"] = !0), fb("https://cct.google/taggy/agent.js"));
      }
      var f = function (q) {
              var r = "GTM",
                  t = "GTM";
              var u = H["google.tagmanager.debugui2.queue"];
              u || ((u = []), (H["google.tagmanager.debugui2.queue"] = u), fb("https://" + Yd.oc + "/debug/bootstrap?id=" + Lh.F + "&src=" + t + "&cond=" + q + "&gtm=" + Dk()));
              var v = { messageType: "CONTAINER_STARTING", data: { scriptSource: $a, containerProduct: r, debug: !1, id: Lh.F } };
              v.data.resume = function () {
                  a();
              };
              Yd.zh && (v.data.initialPublish = !0);
              u.push(v);
          },
          g = void 0,
          l = Oe(H.location, "query", !1, void 0, "gtm_debug");
      zq(l) && (g = 2);
      if (!g && I.referrer) {
          var m = Qe(I.referrer);
          "tagassistant.google.com" === Ne(m, "host") && (g = 3);
      }
      if (!g) {
          var n = uf("__TAG_ASSISTANT");
          n.length && n[0].length && (g = 4);
      }
      if (!g) {
          var p = I.documentElement.getAttribute("data-tag-assistant-present");
          zq(p) && (g = 5);
      }
      g && $a ? f(g) : a();
  })(function () {
      var a = !1;
      a && pj("INIT");
      Vc().o();
      $k();
      Mg.enable_gbraid_cookie_write = !0;
      var b = !!T[Lh.F];
      if (b) {
          var c = T.zones;
          c && c.unregisterChild(Nh());
      } else {
          for (var d = Oh(), e = 0; e < d.length; e++) Eo(d[e], Lh.F);
          for (var f = data.resource || {}, g = f.macros || [], l = 0; l < g.length; l++) Vb.push(g[l]);
          for (var m = f.tags || [], n = 0; n < m.length; n++) Yb.push(m[n]);
          for (var p = f.predicates || [], q = 0; q < p.length; q++) Xb.push(p[q]);
          for (var r = f.rules || [], t = 0; t < r.length; t++) {
              for (var u = r[t], v = {}, y = 0; y < u.length; y++) v[u[y][0]] = Array.prototype.slice.call(u[y], 1);
              Wb.push(v);
          }
          $b = Z;
          ac = Rr;
          T[Lh.F] = Ev;
          for (var x = Qh(), w = Nh(), B = 0; B < w.length; B++) x.container[w[B]] = !0;
          for (var z = Oh(), D = 0; D < z.length; D++) x.destination[z[D]] = !0;
          x.canonical[Lh.nc] = !0;
          Ga(ie, Z.h);
          cc = lc;
          yq();
          $i = !1;
          aj = 0;
          if (("interactive" == I.readyState && !I.createEventObject) || "complete" == I.readyState) cj();
          else {
              jb(I, "DOMContentLoaded", cj);
              jb(I, "readystatechange", cj);
              if (I.createEventObject && I.documentElement.doScroll) {
                  var E = !0;
                  try {
                      E = !H.frameElement;
                  } catch (M) {}
                  E && dj();
              }
              jb(H, "load", cj);
          }
          Sp = !1;
          "complete" === I.readyState ? Up() : jb(H, "load", Up);
          Ci && H.setInterval(vi, 864e5);
          ge = Da();
          if (a) {
              var G = qj("INIT");
          }
      }
  });
})();