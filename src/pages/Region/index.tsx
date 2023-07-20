import React, { useEffect, useState } from "react";
import Region from "../api/region";
import Image from "next/image";
import RegionCreate from "./RegionCreate";
import RegionUpdate from "./RegionUpdate";
import Layout from "@/component/layout";
import Link from "next/link";
export default function RegionView() {
  const [region, setRegion] = useState<any[]>([])
  const [refrash, setRefrash] = useState<any>(false);
  const [display, setDisplay] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [id, setId] = useState<any>();
  useEffect(() => {
    Region.GetData('').then((data : any) => {
      setRegion(data.data);
    });
    console.log(region);
  }, [refrash]);


  

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const paging =(isi : any)=> {
    const payload = {
      page : isi || ''
    }
    Region.GetData(payload).then((data:any) => {
      setRegion(data.data)
    })
  }

  let pageNumber: any[] = [];
  let totalPages: number = region?.meta?.totalPages;
  let currentPage: number = region?.meta?.currentPage;
  
  for (let i: number = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumber.push(i);
  }

  return (
    <div>
      <Layout>
        {displayEdit ? (
          <RegionUpdate
            setRefrash={setRefrash}
            setDisplay={setDisplayEdit}
            id={id}
          />
        ) : display ? (
          <RegionCreate setRefrash={setRefrash} setDisplay={setDisplay} />
        ) : (
          <>
            <button onClick={() => setDisplay(true)}>Add Region</button>
            <h2>List Region</h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      Region ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Region Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      Region Photo
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {region?.items &&
                    region?.items?.map((item: any) => {
                      return (
                        <>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                            >
                              {item.regionId}
                            </th>
                            <td className="px-6 py-4">{item.regionName}</td>
                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              <Image
                                src={`http://localhost:3001/regions/photo/${item.photo}`}
                                width={100}
                                height={100}
                                alt={""}
                              />
                            </td>
                            <td className="px-6 py-4">
                              <button onClick={() => onClick(item.regionId)}>
                                Edit
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="">
            {
              pageNumber.map((page) => <Link key={page} onClick={()=> paging(page)} href={`/Region`}>{page}</Link> )
            }
          </div>
          </>
        )}
      </Layout>
    </div>
  );
}
