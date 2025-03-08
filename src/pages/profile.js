import React, { useState } from "react";

export default function ProfilePage() {
  const [goals, setGoals] = useState([
    { name: "", targetAmount: "", targetDate: "", priority: "medium" },
  ]);

  const addGoal = () => {
    setGoals([
      ...goals,
      { name: "", targetAmount: "", targetDate: "", priority: "medium" },
    ]);
  };

  const removeGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const updateGoal = (index, field, value) => {
    const updatedGoals = [...goals];
    updatedGoals[index] = { ...updatedGoals[index], [field]: value };
    setGoals(updatedGoals);
  };

  return React.createElement(
    "div",
    { className: "container py-5" },
    React.createElement(
      "div",
      { className: "text-center mb-5" },
      React.createElement("img", {
        src: "https://via.placeholder.com/96",
        alt: "Profile",
        className: "rounded-circle mb-3",
        style: { width: "96px", height: "96px" },
      }),
      React.createElement(
        "h1",
        { className: "display-4" },
        "Your Financial Profile"
      ),
      React.createElement(
        "p",
        { className: "text-muted" },
        "Complete your profile to get personalized savings recommendations"
      )
    ),
    React.createElement(
      "ul",
      {
        className: "nav nav-tabs justify-content-center mb-4",
        id: "profileTabs",
        role: "tablist",
      },
      React.createElement(
        "li",
        { className: "nav-item", role: "presentation" },
        React.createElement(
          "button",
          {
            className: "nav-link active",
            id: "personal-tab",
            "data-bs-toggle": "tab",
            "data-bs-target": "#personal",
            type: "button",
            role: "tab",
            "aria-controls": "personal",
            "aria-selected": "true",
          },
          "Personal"
        )
      ),
      React.createElement(
        "li",
        { className: "nav-item", role: "presentation" },
        React.createElement(
          "button",
          {
            className: "nav-link",
            id: "banking-tab",
            "data-bs-toggle": "tab",
            "data-bs-target": "#banking",
            type: "button",
            role: "tab",
            "aria-controls": "banking",
            "aria-selected": "false",
          },
          "Banking"
        )
      ),
      React.createElement(
        "li",
        { className: "nav-item", role: "presentation" },
        React.createElement(
          "button",
          {
            className: "nav-link",
            id: "finances-tab",
            "data-bs-toggle": "tab",
            "data-bs-target": "#finances",
            type: "button",
            role: "tab",
            "aria-controls": "finances",
            "aria-selected": "false",
          },
          "Finances"
        )
      ),
      React.createElement(
        "li",
        { className: "nav-item", role: "presentation" },
        React.createElement(
          "button",
          {
            className: "nav-link",
            id: "goals-tab",
            "data-bs-toggle": "tab",
            "data-bs-target": "#goals",
            type: "button",
            role: "tab",
            "aria-controls": "goals",
            "aria-selected": "false",
          },
          "Goals"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "tab-content", id: "profileTabsContent" },
      // Personal Tab
      React.createElement(
        "div",
        {
          className: "tab-pane fade show active",
          id: "personal",
          role: "tabpanel",
          "aria-labelledby": "personal-tab",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement(
            "div",
            { className: "card-header" },
            React.createElement(
              "h2",
              { className: "card-title" },
              "Personal Information"
            ),
            React.createElement(
              "p",
              { className: "card-text text-muted" },
              "Enter your basic information to personalize your experience"
            )
          ),
          React.createElement(
            "div",
            { className: "card-body" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-6 mb-3" },
                React.createElement(
                  "label",
                  { htmlFor: "fullName", className: "form-label" },
                  "Full Name"
                ),
                React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  id: "fullName",
                  placeholder: "Jane Doe",
                })
              ),
              React.createElement(
                "div",
                { className: "col-md-6 mb-3" },
                React.createElement(
                  "label",
                  { htmlFor: "age", className: "form-label" },
                  "Age"
                ),
                React.createElement("input", {
                  type: "number",
                  className: "form-control",
                  id: "age",
                  placeholder: "30",
                })
              )
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-6 mb-3" },
                React.createElement(
                  "label",
                  { htmlFor: "email", className: "form-label" },
                  "Email"
                ),
                React.createElement("input", {
                  type: "email",
                  className: "form-control",
                  id: "email",
                  placeholder: "jane@example.com",
                })
              ),
              React.createElement(
                "div",
                { className: "col-md-6 mb-3" },
                React.createElement(
                  "label",
                  { htmlFor: "phone", className: "form-label" },
                  "Phone Number"
                ),
                React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  id: "phone",
                  placeholder: "(123) 456-7890",
                })
              )
            ),
            React.createElement(
              "div",
              { className: "mb-3" },
              React.createElement(
                "label",
                { htmlFor: "occupation", className: "form-label" },
                "Occupation"
              ),
              React.createElement("input", {
                type: "text",
                className: "form-control",
                id: "occupation",
                placeholder: "Software Engineer",
              })
            )
          ),
          React.createElement(
            "div",
            { className: "card-footer text-end" },
            React.createElement(
              "button",
              { className: "btn btn-primary" },
              "Save & Continue"
            )
          )
        )
      ),
      // Banking Tab
      React.createElement(
        "div",
        {
          className: "tab-pane fade",
          id: "banking",
          role: "tabpanel",
          "aria-labelledby": "banking-tab",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement(
            "div",
            { className: "card-header" },
            React.createElement(
              "h2",
              { className: "card-title" },
              "Banking Details"
            ),
            React.createElement(
              "p",
              { className: "card-text text-muted" },
              "Your banking information is securely stored and never shared"
            )
          ),
          React.createElement(
            "div",
            { className: "card-body" },
            React.createElement(
              "div",
              { className: "mb-3" },
              React.createElement(
                "label",
                { htmlFor: "bankName", className: "form-label" },
                "Bank Name"
              ),
              React.createElement("input", {
                type: "text",
                className: "form-control",
                id: "bankName",
                placeholder: "Chase Bank",
              })
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-6 mb-3" },
                React.createElement(
                  "label",
                  { htmlFor: "accountType", className: "form-label" },
                  "Account Type"
                ),
                React.createElement(
                  "select",
                  { className: "form-select", id: "accountType" },
                  React.createElement(
                    "option",
                    { value: "checking" },
                    "Checking"
                  ),
                  React.createElement(
                    "option",
                    { value: "savings" },
                    "Savings"
                  ),
                  React.createElement(
                    "option",
                    { value: "investment" },
                    "Investment"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "col-md-6 mb-3" },
                React.createElement(
                  "label",
                  { htmlFor: "accountNumber", className: "form-label" },
                  "Account Number (Last 4 digits)"
                ),
                React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  id: "accountNumber",
                  placeholder: "XXXX",
                  maxLength: 4,
                })
              )
            ),
            React.createElement(
              "div",
              { className: "mb-3" },
              React.createElement(
                "label",
                { htmlFor: "routingNumber", className: "form-label" },
                "Routing Number"
              ),
              React.createElement("input", {
                type: "text",
                className: "form-control",
                id: "routingNumber",
                placeholder: "XXXXXXXXX",
              }),
              React.createElement(
                "p",
                { className: "text-muted small" },
                "This is used for automatic savings transfers (optional)"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "card-footer text-end" },
            React.createElement(
              "button",
              { className: "btn btn-primary" },
              "Save & Continue"
            )
          )
        )
      ),
      // Finances Tab
      React.createElement(
        "div",
        {
          className: "tab-pane fade",
          id: "finances",
          role: "tabpanel",
          "aria-labelledby": "finances-tab",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement(
            "div",
            { className: "card-header" },
            React.createElement(
              "h2",
              { className: "card-title" },
              "Financial Information"
            ),
            React.createElement(
              "p",
              { className: "card-text text-muted" },
              "This helps us analyze your saving potential"
            )
          ),
          React.createElement(
            "div",
            { className: "card-body" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-6 mb-3" },
                React.createElement(
                  "label",
                  { htmlFor: "monthlyIncome", className: "form-label" },
                  "Monthly Income (after tax)"
                ),
                React.createElement(
                  "div",
                  { className: "input-group" },
                  React.createElement(
                    "span",
                    { className: "input-group-text" },
                    "₹"
                  ),
                  React.createElement("input", {
                    type: "text",
                    className: "form-control",
                    id: "monthlyIncome",
                    placeholder: "5,000",
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "col-md-6 mb-3" },
                React.createElement(
                  "label",
                  { htmlFor: "additionalIncome", className: "form-label" },
                  "Additional Monthly Income"
                ),
                React.createElement(
                  "div",
                  { className: "input-group" },
                  React.createElement(
                    "span",
                    { className: "input-group-text" },
                    "₹"
                  ),
                  React.createElement("input", {
                    type: "text",
                    className: "form-control",
                    id: "additionalIncome",
                    placeholder: "1,000",
                  })
                )
              )
            ),
            React.createElement(
              "div",
              { className: "mb-3" },
              React.createElement(
                "label",
                { className: "form-label" },
                "Monthly Expenses"
              ),
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "col-md-6 mb-3" },
                  React.createElement(
                    "label",
                    { htmlFor: "housing", className: "form-label" },
                    "Housing"
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group" },
                    React.createElement(
                      "span",
                      { className: "input-group-text" },
                      "₹"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "housing",
                      placeholder: "1,500",
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-md-6 mb-3" },
                  React.createElement(
                    "label",
                    { htmlFor: "utilities", className: "form-label" },
                    "Utilities"
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group" },
                    React.createElement(
                      "span",
                      { className: "input-group-text" },
                      "₹"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "utilities",
                      placeholder: "200",
                    })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "col-md-6 mb-3" },
                  React.createElement(
                    "label",
                    { htmlFor: "food", className: "form-label" },
                    "Food & Groceries"
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group" },
                    React.createElement(
                      "span",
                      { className: "input-group-text" },
                      "₹"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "food",
                      placeholder: "600",
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-md-6 mb-3" },
                  React.createElement(
                    "label",
                    { htmlFor: "transportation", className: "form-label" },
                    "Transportation"
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group" },
                    React.createElement(
                      "span",
                      { className: "input-group-text" },
                      "₹"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "transportation",
                      placeholder: "300",
                    })
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                  "div",
                  { className: "col-md-6 mb-3" },
                  React.createElement(
                    "label",
                    { htmlFor: "entertainment", className: "form-label" },
                    "Entertainment"
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group" },
                    React.createElement(
                      "span",
                      { className: "input-group-text" },
                      "₹"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "entertainment",
                      placeholder: "200",
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "col-md-6 mb-3" },
                  React.createElement(
                    "label",
                    { htmlFor: "other", className: "form-label" },
                    "Other Expenses"
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group" },
                    React.createElement(
                      "span",
                      { className: "input-group-text" },
                      "₹"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "other",
                      placeholder: "400",
                    })
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "mb-3" },
              React.createElement(
                "label",
                { htmlFor: "currentSavings", className: "form-label" },
                "Current Savings"
              ),
              React.createElement(
                "div",
                { className: "input-group" },
                React.createElement(
                  "span",
                  { className: "input-group-text" },
                  "₹"
                ),
                React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  id: "currentSavings",
                  placeholder: "10,000",
                })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "card-footer text-end" },
            React.createElement(
              "button",
              { className: "btn btn-primary" },
              "Save & Continue"
            )
          )
        )
      ),
      // Goals Tab
      React.createElement(
        "div",
        {
          className: "tab-pane fade",
          id: "goals",
          role: "tabpanel",
          "aria-labelledby": "goals-tab",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement(
            "div",
            { className: "card-header" },
            React.createElement(
              "h2",
              { className: "card-title" },
              "Savings Goals"
            ),
            React.createElement(
              "p",
              { className: "card-text text-muted" },
              "Define what you're saving for and when you want to achieve it"
            )
          ),
          React.createElement(
            "div",
            { className: "card-body" },
            goals.map((goal, index) =>
              React.createElement(
                "div",
                { key: index, className: "card mb-3" },
                React.createElement(
                  "div",
                  { className: "card-body" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "d-flex justify-content-between align-items-center mb-3",
                    },
                    React.createElement(
                      "h3",
                      { className: "h5" },
                      `Goal #${index + 1}`
                    ),
                    goals.length > 1 &&
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-danger btn-sm",
                          onClick: () => removeGoal(index),
                        },
                        "🗑"
                      )
                  ),
                  React.createElement(
                    "div",
                    { className: "mb-3" },
                    React.createElement(
                      "label",
                      { htmlFor: `goalName-${index}`, className: "form-label" },
                      "Goal Name"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: `goalName-${index}`,
                      placeholder: "Emergency Fund, Vacation, etc.",
                      value: goal.name,
                      onChange: (e) =>
                        updateGoal(index, "name", e.target.value),
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      { className: "col-md-6 mb-3" },
                      React.createElement(
                        "label",
                        {
                          htmlFor: `targetAmount-${index}`,
                          className: "form-label",
                        },
                        "Target Amount"
                      ),
                      React.createElement(
                        "div",
                        { className: "input-group" },
                        React.createElement(
                          "span",
                          { className: "input-group-text" },
                          "₹"
                        ),
                        React.createElement("input", {
                          type: "text",
                          className: "form-control",
                          id: `targetAmount-${index}`,
                          placeholder: "5,000",
                          value: goal.targetAmount,
                          onChange: (e) =>
                            updateGoal(index, "targetAmount", e.target.value),
                        })
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-md-6 mb-3" },
                      React.createElement(
                        "label",
                        {
                          htmlFor: `targetDate-${index}`,
                          className: "form-label",
                        },
                        "Target Date"
                      ),
                      React.createElement("input", {
                        type: "date",
                        className: "form-control",
                        id: `targetDate-${index}`,
                        value: goal.targetDate,
                        onChange: (e) =>
                          updateGoal(index, "targetDate", e.target.value),
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "mb-3" },
                    React.createElement(
                      "label",
                      { htmlFor: `priority-${index}`, className: "form-label" },
                      "Priority"
                    ),
                    React.createElement(
                      "select",
                      {
                        className: "form-select",
                        id: `priority-${index}`,
                        value: goal.priority,
                        onChange: (e) =>
                          updateGoal(index, "priority", e.target.value),
                      },
                      React.createElement("option", { value: "low" }, "Low"),
                      React.createElement(
                        "option",
                        { value: "medium" },
                        "Medium"
                      ),
                      React.createElement("option", { value: "high" }, "High")
                    )
                  )
                )
              )
            ),
            React.createElement(
              "button",
              {
                className: "btn btn-outline-primary w-100",
                onClick: addGoal,
              },
              "➕ Add Another Goal"
            )
          ),
          React.createElement(
            "div",
            { className: "card-footer d-flex justify-content-between" },
            React.createElement(
              "button",
              { className: "btn btn-outline-secondary" },
              "Back"
            ),
            React.createElement(
              "button",
              { className: "btn btn-primary" },
              "Complete Profile"
            )
          )
        )
      )
    )
  );
}