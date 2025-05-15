import { SalesByPaymentMethod } from "@/components/Dashboard/Charts/SalesByPaymentMethod";
import { TotalDeVendasChart } from "@/components/Dashboard/Charts/TotalDeVendas";
import { NavbarDashboard } from "@/components/NavbarDashboardUsuário";

export default function PáginaDoDashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen p-4">
      <NavbarDashboard />
      <div className="flex items-center justify-center flex-col w-full gap-4">
        <div className="flex items-center flex-col sm:flex-row gap-6 ">
          <div className="flex-1">
            <TotalDeVendasChart />
          </div>
          <div className="flex-1">
            <SalesByPaymentMethod />
          </div>
        </div>
      </div>
    </div>
  );
}
