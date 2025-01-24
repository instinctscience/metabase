(window.heapReadyCb = window.heapReadyCb || []),
  (window.heap = window.heap || []),
  (heap.load = function (e, t) {
    (window.heap.envId = e),
      (window.heap.clientConfig = t = t || {}),
      (window.heap.clientConfig.shouldFetchServerConfig = !1);
    var a = document.createElement("script");
    (a.type = "text/javascript"),
      (a.async = !0),
      (a.src = "https://cdn.us.heap-api.com/config/" + e + "/heap_config.js");
    var r = document.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(a, r);
    var n = [
        "init",
        "startTracking",
        "stopTracking",
        "track",
        "resetIdentity",
        "identify",
        "identifyHashed",
        "getSessionId",
        "getUserId",
        "getIdentity",
        "addUserProperties",
        "addEventProperties",
        "removeEventProperty",
        "clearEventProperties",
        "addAccountProperties",
        "addAdapter",
        "addTransformer",
        "addTransformerFn",
        "onReady",
        "addPageviewProperties",
        "removePageviewProperty",
        "clearPageviewProperties",
        "trackPageview",
      ],
      i = function (e) {
        return function () {
          var t = Array.prototype.slice.call(arguments, 0);
          window.heapReadyCb.push({
            name: e,
            fn: function () {
              heap[e] && heap[e].apply(heap, t);
            },
          });
        };
      };
    for (var p = 0; p < n.length; p++) heap[n[p]] = i(n[p]);
  });

function isInstinctProd() {
  // TODO: There's at least one more prod domain, right?
  return window.location.hostname.endsWith('.instinctvet.com');
}

function setupHeap() {
  const HEAP_ID_PROD = '152788304';
  const HEAP_ID_DEV = '4239195470';

  const heapId = isInstinctProd() ? HEAP_ID_PROD : HEAP_ID_DEV;
  window.heap.load(heapId);
  window.heap.addUserProperties({
    sourceApplication: 'metabase',
  });
}

setupHeap();
