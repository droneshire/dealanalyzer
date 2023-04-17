export interface Property {
  key: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  email: string;
  purchasePrice: number;
  rehabCost: number;
  closingCost: number;
  arv: number;
  rent: number;
  vacancy: number;
  capEx: number;
  management: number;
  insurance: number;
  propertyTax: number;
  interestRate: number;
  loanTerm: number;
  closingCosts: number;
  miscCosts: number;
  cashOnCash: number;
  roi: number;
  monthlyPayment: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlyCashFlow: number;
  annualIncome: number;
  annualExpenses: number;
  annualCashFlow: number;
  annualCashOnCash: number;
  annualReturnOnInvestment: number;
}

export function updateProperty(property: Property, props: Partial<Property>): Property {
  return {
    ...property,
    ...props,
  };
}

export function propertyFactory(props?: Partial<Property>): Property {
  return {
    key: props?.address || Date.now().toString(),
    address: props?.address || "",
    address2: props?.address2 || "",
    city: props?.city || "",
    state: props?.state || "",
    zipcode: props?.zipcode || "",
    email: props?.email || "",
    purchasePrice: props?.purchasePrice || 0,
    rehabCost: props?.rehabCost || 0,
    closingCost: props?.closingCost || 0,

    arv: props?.arv || 0,
    rent: props?.rent || 0,
    vacancy: props?.vacancy || 0,
    capEx: props?.capEx || 0,
    management: props?.management || 0,
    insurance: props?.insurance || 0,
    propertyTax: props?.propertyTax || 0,
    interestRate: props?.interestRate || 0,
    loanTerm: props?.loanTerm || 0,
    closingCosts: props?.closingCosts || 0,
    miscCosts: props?.miscCosts || 0,
    cashOnCash: props?.cashOnCash || 0,
    roi: props?.roi || 0,
    monthlyPayment: props?.monthlyPayment || 0,
    monthlyIncome: props?.monthlyIncome || 0,
    monthlyExpenses: props?.monthlyExpenses || 0,
    monthlyCashFlow: props?.monthlyCashFlow || 0,
    annualIncome: props?.annualIncome || 0,
    annualExpenses: props?.annualExpenses || 0,
    annualCashFlow: props?.annualCashFlow || 0,
    annualCashOnCash: props?.annualCashOnCash || 0,
    annualReturnOnInvestment: props?.annualReturnOnInvestment || 0,
  };
}
