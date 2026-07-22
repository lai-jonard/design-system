/**
 * proto-state.js — Shared localStorage state for the Founder Flow prototype.
 * Include this script in every prototype screen BEFORE DOMContentLoaded logic.
 *
 * Usage:
 *   ProtoState.get('unlockedAreas')         → ['governance', ...]
 *   ProtoState.unlockArea('employment')
 *   ProtoState.resolveInsight('governance', 'Articles of incorporation missing founder signatures')
 *   ProtoState.isResolved('governance', headline)  → boolean
 *   ProtoState.applyResolvedInsights(area, insightsArray) → mutated copy with resolved items set to 'success'
 *   ProtoState.reset()                      → clears all state and reloads
 */
(function() {
  var DEFAULTS = {
    unlockedAreas: ['governance'],
    resolvedInsights: {},
    hasBoardResolution: false,
    pendingDataRoomInvite: null,
  };

  var AREA_STATS = {
    'governance':   { urgent: 2, proactive: 3 },
    'employment':   { urgent: 1, proactive: 1 },
    'fundraising':  { urgent: 1, proactive: 2 },
  };

  function get(key) {
    try {
      var v = localStorage.getItem('proto_' + key);
      return v !== null ? JSON.parse(v) : JSON.parse(JSON.stringify(DEFAULTS[key]));
    } catch(e) {
      return JSON.parse(JSON.stringify(DEFAULTS[key]));
    }
  }

  function set(key, value) {
    try { localStorage.setItem('proto_' + key, JSON.stringify(value)); } catch(e) {}
  }

  function unlockArea(area) {
    var areas = get('unlockedAreas');
    if (areas.indexOf(area) === -1) {
      areas.push(area);
      set('unlockedAreas', areas);
    }
  }

  function isUnlocked(area) {
    return get('unlockedAreas').indexOf(area) !== -1;
  }

  function resolveInsight(area, headline) {
    var resolved = get('resolvedInsights');
    if (!resolved[area]) resolved[area] = [];
    if (resolved[area].indexOf(headline) === -1) {
      resolved[area].push(headline);
      set('resolvedInsights', resolved);
    }
  }

  function isResolved(area, headline) {
    var resolved = get('resolvedInsights');
    return !!(resolved[area] && resolved[area].indexOf(headline) !== -1);
  }

  /**
   * Takes an array of insight objects and returns a new array where any
   * previously-resolved insights have severity set to 'success'.
   */
  function applyResolvedInsights(area, insights) {
    var resolved = get('resolvedInsights');
    var list = resolved[area] || [];
    return insights.map(function(ins) {
      if (list.indexOf(ins.headline) !== -1 && ins.severity !== 'resolved') {
        return Object.assign({}, ins, { severity: 'resolved' });
      }
      return ins;
    });
  }

  /**
   * Build dashboard area entries dynamically from current state.
   */
  function buildDashboardAreas() {
    var unlocked = get('unlockedAreas');
    var u = function(area) { return unlocked.indexOf(area) !== -1; };
    return [
      {
        name: 'Governance',
        description: "Your company structure, board records, and incorporation documents.",
        status: 'unlocked',
        urgent: countUnresolved('governance', 2),
        proactive: countUnresolved('governance', 3),
      },
      {
        name: 'Employment',
        description: "Your team's contracts, IP assignments, and employment paperwork.",
        status: u('employment') ? 'unlocked' : 'locked-unlockable',
        urgent: u('employment') ? countUnresolved('employment', 1) : undefined,
        proactive: u('employment') ? countUnresolved('employment', 1) : undefined,
        dependencies: ['Governance'],
      },
      {
        name: 'Fundraising',
        description: "Your investor materials, cap table, and fundraise readiness.",
        status: u('fundraising') ? 'unlocked' : 'locked-unlockable',
        urgent: u('fundraising') ? countUnresolved('fundraising', 1) : undefined,
        proactive: u('fundraising') ? countUnresolved('fundraising', 2) : undefined,
        dependencies: ['Governance', 'Employment'],
      },
    ];
  }

  /** Count how many of the baseline urgent/proactive are still unresolved */
  function countUnresolved(area, baseline) {
    var resolved = get('resolvedInsights');
    var list = resolved[area] || [];
    return Math.max(0, baseline - list.length);
  }

  /** Build sidebar unlockedAreas from state */
  function getSidebarUnlockedAreas() {
    return get('unlockedAreas');
  }

  function reset() {
    localStorage.clear();
    location.reload();
  }

  function addBoardResolution() {
    set('hasBoardResolution', true);
  }

  function hasBoardResolution() {
    return get('hasBoardResolution') === true;
  }

  window.ProtoState = {
    get: get,
    set: set,
    unlockArea: unlockArea,
    isUnlocked: isUnlocked,
    resolveInsight: resolveInsight,
    isResolved: isResolved,
    applyResolvedInsights: applyResolvedInsights,
    buildDashboardAreas: buildDashboardAreas,
    getSidebarUnlockedAreas: getSidebarUnlockedAreas,
    addBoardResolution: addBoardResolution,
    hasBoardResolution: hasBoardResolution,
    reset: reset,
  };
})();
