import Footer from '../partials/Footer'
import Header from '../partials/Header'
import SideNavigation from '../partials/SideNavigation'
import DashboardCard from './DashboardCard'
import DashboardAccordion from './DashboardAccordion'
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import { allClothes } from '../clothes-data'

const Dashboard = () => {
    

  return (
    
    <>
    <section className="layout-main">
            <div className="layout-division">
            <SideNavigation menu="dashboard"/>
                <main>
                    <Header title="Dashboard" subtitle="Welcome to ZANEROBE"/>
                    <div className="p-8">
                      <div className="grid grid-cols-[1fr_400px] gap-5">

                        <div className="stats">

                            <div className="grid grid-cols-4 gap-5">
                                <DashboardCard title="Summer" filterby="Summer"/>
                                <DashboardCard title="Winter" filterby="Winter"/>
                            </div>

                            <div className="chart mt-10">
                                <h3>Clothes Prices</h3>
                                <BarChart
                                width={800}
                                height={300}
                                data={allClothes.slice(0,12)}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="clothes_title" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="clothes_price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                </BarChart>
                            </div>

                        </div>

                        <div className="sidebar overflow-auto custom-scroll h-[calc(100vh-200px)]">
                                <DashboardAccordion title="Summer" filterby="Summer"/>
                                <DashboardAccordion title="Winter" filterby="Winter"/>
                        </div>
                        
                      </div>
                    </div>
                    <Footer/>
                </main>
            </div>
        </section>

    </>
  )
}

export default Dashboard