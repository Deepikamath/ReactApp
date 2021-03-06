export const POLICYINFO = [{
	PolicyPeriod: {
		Policy: {
			Account: {
				AccountHolderContact: {
					PrimaryAddress: {
						AddressLine1: "abc",
						State: {
							DisplayName: "Iowa"
						},
						PostalCode: "12344-5656",
						Country: {
							DisplayName: "United States"
						},
						City: "mi",
						AddressType: "business",
						Subtype: "Address"
					},
					entityCompany: {
						Name: "test"
					},
					Subtype: "Company"
				},
				AccountNumber: "5727651905"
			},
			Product: {
				DisplayName: "Commercial Auto"
			},
			IssueDate: "2021-01-29T00:00:00+05:30"
		},
		TaxAndSurchargesRPT: "287.00 usd",
		WrittenDate: "2021-02-16T00:00:00+05:30",
		PolicyNumber: "3651656152",
		UWCompany: {
			DisplayName: "Acme Low Hazard Insurance"
		},
		PeriodStart: "2021-01-21T00:01:00+05:30",
		PeriodEnd: "2022-01-21T00:01:00+05:30",
		Offering: {
			Name: "Standard"
		},
		TotalPremiumRPT: "5213.00 usd",
		PolicyLocations: {
			Entry: {
				LocationNum: "1",
				AccountLocation: {
					AddressLine1: "abc",
					LocationNum: "1",
					State: "MI",
					Country: "US",
					PostalCode: "12344-5656",
					City: "mi",
					AddressType: "business",
					Subtype: "AccountLocation"
				}
			}
		},
		TermNumber: "1",
		TotalCostRPT: "5500.00 usd",
		PolicyContactRoles: {
			Entry: {
				AccountContactRole: {
					AccountContact: {
						Subtype: "AccountContact",
						Contact: {
							PrimaryAddress: {
								AddressLine1: "abc",
								State: {
									DisplayName: "Iowa"
								},
								PostalCode: "12344-5656",
								Country: {
									DisplayName: "United States"
								},
								City: "mi",
								AddressType: "business",
								Subtype: "Address"
							},
							entityCompany: {
								Name: "test"
							},
							Subtype: "Company"
						}
					},
					Subtype: "NamedInsured"
				},
				Subtype: "PolicyPriNamedInsured"
			}
		},
		PeriodDisplayStatus: "In Force"
	}
}
]