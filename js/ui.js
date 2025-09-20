// js/ui.js
import { logout } from './auth.js';
export function renderHeader(){
  const root = document.getElementById('app-header');
  if(!root) return;
  const u = window.__AUTH__;
  root.innerHTML = `
    <div class="header-toolbar">
      <div><strong>Spa Booking</strong> — Dashboard</div>
      <div class="toolbar-actions">
        ${u ? `<span class="user-chip">${u.name} · ${u.role}</span>` : ''}
        ${u ? `<button onclick="__LOGOUT__()" class="btn-logout-ghost">Đăng xuất</button>` : ''}
      </div>
    </div>
  `;
  window.__LOGOUT__ = logout;
}
