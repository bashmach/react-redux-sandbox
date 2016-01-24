import React from 'react';
import { createDevTools } from 'redux-devtools';
import { persistState } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
export default createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  <DockMonitor toggleVisibilityKey='alt-w'
               changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow'/>
  </DockMonitor>
);