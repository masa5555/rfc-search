'use client';

import {Suspense, useEffect, useState} from 'react';
import {type InferSelectModel} from 'drizzle-orm';
import Link from 'next/link';
import {getRfcList} from './server/get-rfc-list.ts';
import {type rfcTable} from '@/db/schema/index.ts';

type RFC = InferSelectModel<typeof rfcTable>;

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentRfcList, setCurrentRfcList] = useState<RFC[]>([]);
  const [rfcList, setRfcList] = useState<RFC[]>([]);

  useEffect(() => {
    (async () => {
      await clickHandler();
    })();
  }, []);

  const clickHandler = async () => {
    const fetchedRfcList = await getRfcList({page: currentPage});
    setRfcList([...rfcList, ...currentRfcList]);
    setCurrentRfcList([...fetchedRfcList]);
    setCurrentPage(currentPage + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="text-4xl font-bold">RFCs</h1>
      <ul className="flex flex-col">
        {rfcList.map((rfc) => (
          <RfcItem rfc={rfc} />
        ))}
        <Suspense fallback={<div>Loading ...</div>}>
          {currentRfcList.map((rfc) => (
            <RfcItem rfc={rfc} />
          ))}
        </Suspense>
        <button
          onClick={clickHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          さらに読み込む
        </button>
      </ul>
    </main>
  );
}

const RfcItem = ({rfc}: {rfc: RFC}) => {
  return (
    <li key={rfc.id} className="flex flex-col h-24">
      <Link
        href={`https://www.ietf.org/rfc/${rfc.docId.toLowerCase()}.txt`}
        target="_blank"
        className="text-xl font-bold text-black hover:text-blue-500 line-clamp-2"
      >
        {rfc.title}
      </Link>
      <span className="text-gray-500">{`${rfc.docId}`}</span>
    </li>
  );
};
