((window.r7 = window.r7 || {}),
  (window.r7.ads = (function () {
    function a () {
      var n,
        t = window.r7.slot.getSlotDefinitions();
      if (!t) return !1;
      ("outstream" === t.sizes || "intextvideo" === t.sizes
        ? window.r7.outstream.load(t)
        : ((n = t),
          googletag.cmd.push(function () {
            var t = googletag
              .defineSlot(n.hash, n.sizes)
              .addService(googletag.pubads());
            ("fluid" == n.sizes
              ? t.setTargeting("pos", "native")
              : n.pos && t.setTargeting("pos", n.pos),
              n.context && t.setTargeting("context", n.context));
            for (var e = 0; e < n.others.length; e++) {
              var i = n.others[e];
              t.setTargeting(i.name, i.value);
            }
            window.r7.tailTarget.tailTargetWithGPT(t);
            var a = t.getSlotElementId(),
              o = n.script;
            (window.r7.slot.createAdSlot(o, a), googletag.display(t));
          })),
        a());
    }
    return {
      load: function () {
        var e,
          i = window.r7;
        e = setInterval(function () {
          var t = i.adv.isReady();
          i.tailTarget.isReady() && t && (a(), clearInterval(e));
        }, 0);
      },
    };
  })()),
  (window.r7 = window.r7 || {}),
  (window.r7.adv = (function () {
    var e =
      "https://adv.r7.com//script/async?href=" +
      window.location.href.split("?")[0];
    return {
      load: function () {
        if (document.querySelector("script[src='" + e + "']")) return !1;
        ((window.googletag = window.googletag || {}),
          (window.googletag.cmd = window.googletag.cmd || []),
          googletag.cmd.push(function () {
            (googletag.pubads().enableSingleRequest(),
              googletag.enableServices());
          }),
          window.r7.fif.setSourceURL(e).createFif("window.parent.r7ad=r7ad;"));
        var t = setInterval(function () {
          window.r7ad &&
            ((function () {
              var t = window.r7.googleMCM;
              if (t) {
                var e = t.find(function (t) {
                  return t.partnerUrl.includes(window.location.hostname);
                });
                if (e) {
                  var i = "/7542," + e.networkCode + "/";
                  window.r7ad.hash = window.r7ad.hash.replace("/7542/", i);
                }
              }
            })(),
              clearInterval(t));
        }, 0);
      },
      isReady: function () {
        return "undefined" != typeof r7ad;
      },
    };
  })()),
  (window.r7 = window.r7 || {}),
  (window.r7.fif = (function () {
    var i, a;
    return {
      setSourceURL: function (t) {
        return ((i = t), this);
      },
      createFif: function (t) {
        (((
          (a = document.createElement("iframe")).frameElement || a
        ).style.cssText = "width: 0; height: 0; border: 0"),
          (a.src = "javascript:false"),
          document.body.appendChild(a));
        var e = a.contentWindow.document;
        (e
          .open()
          .write(
            "<body onload=\"var js = document.createElement('script');js.src = '" +
            i +
            "';js.onload=function(){ " +
            t +
            ' };document.body.appendChild(js);">',
          ),
          e.close());
      },
    };
  })()),
  (window.r7 = window.r7 || {}),
  (window.r7.gpt = (function () {
    var e = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    return {
      load: function () {
        if (
          document.querySelector("script[src='" + e + "']") ||
          (window.googletag && googletag.apiReady)
        )
          return !1;
        var t = document.createElement("script");
        ((t.src = e), (t.async = !0), document.body.appendChild(t));
      },
    };
  })()),
  (window.r7 = window.r7 || {}),
  (window.r7.outstream = (function () {
    var t = {
      desk: ["fluid", [300, 250], [640, 360], [1, 1]],
      mobile: ["fluid", [300, 250], [320, 180], [1, 1]],
    },
      n = window.innerWidth < 600 ? t.mobile : t.desk;
    return {
      load: function (a) {
        var o = a.target || "intextvideo-r7";
        if (!o) return !1;
        var t = document.querySelector("#" + o);
        (t &&
          ((t.style.margin = "20px 0"),
            (t.style.textAlign = "center"),
            (t.style.clear = "both")),
          googletag.cmd.push(function () {
            var t = googletag
              .defineSlot(a.hash, n, o)
              .addService(googletag.pubads());
            (a.pos && t.setTargeting("pos", a.pos),
              a.context && t.setTargeting("context", a.context));
            for (var e = 0; e < a.others.length; e++) {
              var i = a.others[e];
              t.setTargeting(i.name, i.value);
            }
            (window.r7.tailTarget.tailTargetWithGPT(t),
              googletag.pubads().collapseEmptyDivs(),
              googletag.pubads().enableSingleRequest(),
              googletag.enableServices(),
              googletag.pubads().refresh([t]));
          }));
      },
    };
  })()),
  (window.r7 = window.r7 || {}),
  (window.r7.slot = {
    createAdSlot: function (t, e) {
      try {
        var i = document.createElement("div");
        return ((i.id = e), t.parentNode.insertBefore(i, t), i);
      } catch (t) { }
    },
    getSlotDefinitions: function () {
      var t,
        e =
          ((t = document.querySelector(
            'script[data-vendor="r7.com"]:not(.already-visited)',
          )) && t.classList.add("already-visited"),
            t);
      if (!e) return !1;
      var i = e.getAttribute("data-hash") || window.r7ad.hash,
        a = e.getAttribute("data-sizes");
      -1 === ["fluid", "outstream", "intextvideo"].indexOf(a.toLowerCase()) &&
        (a = JSON.parse(a));
      for (
        var o = e.getAttribute("data-pos"),
        n = e.getAttribute("data-context"),
        r = e.getAttribute("data-nofollow"),
        d = e.getAttribute("data-target"),
        g = [],
        c = 0;
        c < e.attributes.length - 1;
        c++
      ) {
        var l = e.attributes[c];
        -1 !== l.name.indexOf("data-") &&
          -1 ===
          [
            "data-hash",
            "data-sizes",
            "data-vendor",
            "data-pos",
            "data-context",
            "data-nofollow",
            "data-target",
          ].indexOf(l.name) &&
          g.push({ name: l.name.replace("data-", ""), value: l.value });
      }
      return {
        sizes: a,
        pos: o,
        context: n,
        others: g,
        hash: i,
        nofollow: r,
        script: e,
        target: d,
      };
    },
  }),
  (window.r7 = window.r7 || {}),
  (window.r7.tailTarget = (function () {
    var t = !1,
      e = "https://scs.r7.com/tailtarget/profiles.js";
    return {
      load: function () {
        if (document.querySelector("script[src='" + e + "']")) return !1;
        var t = [
          "window.parent._ttprofiles=_ttprofiles;",
          "window.parent.r7.tailTarget.setReadyState();",
        ].join("");
        window.r7.fif.setSourceURL(e).createFif(t);
      },
      isReady: function () {
        return t;
      },
      setReadyState: function () {
        ((t = !0),
          (window._ttprofiles = window._ttprofiles || []),
          (_ttprofiles.profiles = []),
          _ttprofiles.push(["_setAccount", "TT-9964-3"]),
          _ttprofiles.push(["_enableServices"]));
      },
      tailTargetWithGPT: function (t) {
        if (!t) return !1;
        (t.setTargeting("age", _ttprofiles.getAge),
          t.setTargeting("gender", _ttprofiles.getGender),
          t.setTargeting("cluster", _ttprofiles.getProfiles),
          t.setTargeting("subjects", _ttprofiles.getSubjects),
          t.setTargeting("team", _ttprofiles.getTeam),
          t.setTargeting("sclass", _ttprofiles.getSocialClass),
          t.setTargeting("msegments", _ttprofiles.getMicrosegments),
          t.setTargeting("customaud", _ttprofiles.getCustomAudience));
      },
      setTargeting: function () {
        var t = window._ttprofiles || [],
          e = {
            age: t.getAge,
            gender: t.getGender,
            cluster: t.getProfiles,
            subjects: t.getSubjects,
            team: t.getTeam,
            sclass: t.getSocialClass,
            msegments: t.getMicrosegments,
            customaud: t.getCustomAudience,
          },
          i = "";
        for (var a in e) e.hasOwnProperty(a) && (i += a + "=" + e[a] + "&");
        return encodeURIComponent(i);
      },
    };
  })()),
  (window.r7 = window.r7 || {}),
  (window.r7.utils = {
    getMuteIconBase64: function () {
      return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4wIgogICBpZD0ibGF5ZXIxIgogICB3aWR0aD0iNDAwcHQiCiAgIGhlaWdodD0iNDAwcHQiCiAgIHZpZXdCb3g9IjAgMCA3NSA3NSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4zLjEgcjk4ODYiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik11dGVfSWNvbi5zdmciPjxkZWZzCiAgIGlkPSJkZWZzMzAwNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMjgiCiAgIGlkPSJuYW1lZHZpZXczMDA1IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIHNob3dndWlkZXM9InRydWUiCiAgIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiCiAgIGlua3NjYXBlOnpvb209IjAuNjQ5IgogICBpbmtzY2FwZTpjeD0iLTI4Mi40MTk2IgogICBpbmtzY2FwZTpjeT0iMTcxLjgzNDgiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMSIKICAgaW5rc2NhcGU6c25hcC1zbW9vdGgtbm9kZXM9ImZhbHNlIgogICBpbmtzY2FwZTpvYmplY3QtcGF0aHM9ImZhbHNlIj48c29kaXBvZGk6Z3VpZGUKICAgICBvcmllbnRhdGlvbj0iMCwxIgogICAgIHBvc2l0aW9uPSI0Mi40OTE3NzksMzI2Ljg1OTg0IgogICAgIGlkPSJndWlkZTMwMDkiIC8+PHNvZGlwb2RpOmd1aWRlCiAgICAgb3JpZW50YXRpb249IjAsMSIKICAgICBwb3NpdGlvbj0iMTE4LjY0NDA3LDE2NC44NjkwMyIKICAgICBpZD0iZ3VpZGUzMDExIiAvPjxzb2RpcG9kaTpndWlkZQogICAgIG9yaWVudGF0aW9uPSIxLDAiCiAgICAgcG9zaXRpb249IjMyNC4zNDUxNSwxOTQuNTMwMDUiCiAgICAgaWQ9Imd1aWRlMzAwNSIgLz48c29kaXBvZGk6Z3VpZGUKICAgICBvcmllbnRhdGlvbj0iMSwwIgogICAgIHBvc2l0aW9uPSI0NjIuNjM0ODIsMTcwLjY0NzE1IgogICAgIGlkPSJndWlkZTMwMDciIC8+PC9zb2RpcG9kaTpuYW1lZHZpZXc+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGUgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGcKICAgaWQ9ImcxIj48cG9seWdvbgogICBpZD0icG9seWdvbjEiCiAgIHBvaW50cz0iMzkuMzg5LDEzLjc2OSAyMi4yMzUsMjguNjA2IDYsMjguNjA2IDYsNDcuNjk5IDIxLjk4OSw0Ny42OTkgMzkuMzg5LDYyLjc1IDM5LjM4OSwxMy43NjkiCiAgIHN0eWxlPSJzdHJva2U6IzExMTExMTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWpvaW46cm91bmQ7ZmlsbDojMTExMTExOyIgLz4KCjxwYXRoCiAgIGlkPSJwYXRoMzAwMyIKICAgZD0iTSA0OC42NTE3NzIsNTAuMjY5NjQ2IDY5LjM5NTIyMywyNS45NzEwMjQiCiAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxMTExMTE7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQiCiAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CjxwYXRoCiAgIGlkPSJwYXRoMzAwMy0xIgogICBkPSJNIDY5LjM5NTIyMyw1MC4yNjk2NDYgNDguNjUxNzcyLDI1Ljk3MTAyNCIKICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzExMTExMTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZCIKICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz48L2c+Cjwvc3ZnPg==";
    },
    getSpeakerIconBase64: function () {
      return "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4wIiAgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCA3NSA3NSI+DQo8cGF0aCBkPSJNMzkuMzg5LDEzLjc2OSBMMjIuMjM1LDI4LjYwNiBMNiwyOC42MDYgTDYsNDcuNjk5IEwyMS45ODksNDcuNjk5IEwzOS4zODksNjIuNzUgTDM5LjM4OSwxMy43Njl6Ig0Kc3R5bGU9InN0cm9rZTojMTExO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lam9pbjpyb3VuZDtmaWxsOiMxMTE7Ig0KLz4NCjxwYXRoIGQ9Ik00OCwyNy42YTE5LjUsMTkuNSAwIDAgMSAwLDIxLjRNNTUuMSwyMC41YTMwLDMwIDAgMCAxIDAsMzUuNk02MS42LDE0YTM4LjgsMzguOCAwIDAgMSAwLDQ4LjYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxMTE7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQiLz4NCjwvc3ZnPg==";
    },
    getTagUrl: function (t) {
      var e,
        i,
        a,
        o = window.location.hostname,
        n = !isNaN(parseInt(o)),
        r = "localhost" === o,
        d = -1 !== o.indexOf("ir7.com.br");
      return r || n || d
        ? "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator="
        : ((e = t),
          (i = Math.floor(Date.now() / 1e3)),
          (a = window.r7.tailTarget.setTargeting()),
          "https://pubads.g.doubleclick.net/gampad/ads?sz=780x432&iu=" +
          e.hash +
          "&gdfp_req=1&env=vp&output=xml_vast4&unviewed_position_start=1&url=" +
          document.referrer +
          "&correlator=" +
          i +
          "&cust_params=pos%3Doutstream%26" +
          a +
          "&ad_rule=0");
    },
    isInViewport: function (t) {
      if (t) {
        var e = t.getBoundingClientRect(),
          i = 0 < e.bottom && 0 < e.right,
          a =
            e.left <
            (window.innerWidth || document.documentElement.clientWidth),
          o =
            e.top - 0 <
            (window.innerHeight || document.documentElement.clientHeight);
        return i && a && o;
      }
    },
  }),
  (window.r7 = window.r7 || {}),
  (window.r7.alreadyStarted = !1),
  (window.googleMCMCallback = function (t) {
    window.r7.googleMCM = t.itens;
  }),
  (window.r7.main = {
    start: function () {
      if (window.r7.alreadyStarted) return !1;
      var t, e;
      ((window.r7.alreadyStarted = !0),
        (t = function () {
          (window.r7.gpt.load(),
            window.r7.tailTarget.load(),
            window.r7.adv.load(),
            window.r7.ads.load());
        }),
        ((e = document.createElement("script")).src =
          "https://snippets.r7.com/snippet/615cafd08509f36f39000026?callback=googleMCMCallback"),
        (e.async = !0),
        (e.onload = t),
        document.body.appendChild(e));
    },
  }),
  window.removeEventListener("load", window.r7.main.start),
  "complete" === document.readyState
    ? window.r7.main.start()
    : window.addEventListener("load", window.r7.main.start));
