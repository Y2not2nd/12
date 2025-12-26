---
title: "Location"
date: 2024-05-08
hidemeta: true
description: "Professor Dr von Igelfeld's mailing and office addresses at the Institute of Romance Philology."

---

---

#### Mailing address

Professor Dr von Igelfeld  
Institute of Romance Philology  
University of Regensburg  
Regensburg, Germany

---

#### Office address

Room 133  
Institute of Romance Philology  
University of Regensburg

---

#### Office location

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10470.896334563153!2d12.085487114429176!3d48.99680799095555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479fc1126394f30f%3A0xb4c5000594ee5334!2sUniversity%20of%20Regensburg!5e0!3m2!1sen!2sus!4v1714871932562!5m2!1sen!2sus" 
width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

---

#### TRE intake request

<form id="tre-intake-form" novalidate>
  <div class="form-field">
    <label for="workspace-name">Workspace Name</label>
    <input id="workspace-name" name="workspaceName" type="text" minlength="3" required />
  </div>
  <div class="form-field">
    <label for="owner-email">Owner Email</label>
    <input id="owner-email" name="owner" type="email" required />
  </div>
  <div class="form-field">
    <label for="workspace-type">Workspace Type (UI only)</label>
    <select id="workspace-type" name="workspaceType">
      <option value="" selected>Select a workspace type</option>
      <option value="shared">Shared compute</option>
      <option value="dedicated">Dedicated compute</option>
      <option value="data">Data only</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div class="form-field" id="workspace-type-other-field" hidden>
    <label for="workspace-type-other">Other workspace type</label>
    <input id="workspace-type-other" name="workspaceTypeOther" type="text" />
  </div>
  <button type="submit">Submit request</button>
  <p id="tre-intake-status" role="status" aria-live="polite"></p>
</form>

<script defer src="/assets/js/tre-intake.js"></script>
