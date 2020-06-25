// pages/home.tsx
// Import react & Link
import * as React from 'react'
import { Link } from 'react-router-dom'
// Import components
import BudgetTotal from './../components/budget-total'
import BudgetList from './../components/budget-list'
import BudgetItemAdd from './../components/budget-item-add'
import IconSettings from './../components/icon-settings'
// Import interfaces
import { BudgetItemObjInterface, HomePageInterface } from './../interfaces'
const HomePage = (props: HomePageInterface) => {
  // Prepare homepage states
  const [budgetPaid, setBudgetPaid] = React.useState(0)
  const [showAddItem, setShowAddItem] = React.useState(false)
  // ...
}