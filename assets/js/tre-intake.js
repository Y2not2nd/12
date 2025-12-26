const LOGIC_APP_URL = "https://example.com/logic-app-url";

const initTreIntakeForm = () => {
  const form = document.getElementById("tre-intake-form");
  if (!form) {
    return;
  }

  const workspaceNameInput = document.getElementById("workspace-name");
  const ownerEmailInput = document.getElementById("owner-email");
  const workspaceTypeSelect = document.getElementById("workspace-type");
  const workspaceTypeOtherField = document.getElementById("workspace-type-other-field");
  const workspaceTypeOtherInput = document.getElementById("workspace-type-other");
  const statusMessage = document.getElementById("tre-intake-status");

  const setStatus = (message, isError = false) => {
    statusMessage.textContent = message;
    statusMessage.style.color = isError ? "#b00020" : "";
  };

  const updateOtherFieldVisibility = () => {
    const isOther = workspaceTypeSelect.value === "other";
    workspaceTypeOtherField.hidden = !isOther;
    if (!isOther) {
      workspaceTypeOtherInput.value = "";
    }
  };

  workspaceTypeSelect.addEventListener("change", updateOtherFieldVisibility);
  updateOtherFieldVisibility();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const workspaceName = workspaceNameInput.value.trim();
    if (workspaceName.length < 3) {
      setStatus("Workspace name must be at least 3 characters.", true);
      workspaceNameInput.focus();
      return;
    }

    const payload = {
      workspaceName,
      owner: ownerEmailInput.value.trim(),
    };

    setStatus("Submitting request...");

    try {
      const response = await fetch(LOGIC_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if ([200, 202, 204].includes(response.status)) {
        setStatus("Request submitted successfully.");
        form.reset();
        updateOtherFieldVisibility();
      } else {
        setStatus("Submission failed. Please try again later.", true);
      }
    } catch (error) {
      setStatus("Submission failed. Please check your connection and try again.", true);
    }
  });
};

document.addEventListener("DOMContentLoaded", initTreIntakeForm);
