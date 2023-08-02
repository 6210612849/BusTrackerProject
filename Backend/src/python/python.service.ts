


import { spawn, spawnSync } from 'child_process'
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { json } from 'express';

import { PythonShell } from 'python-shell';



export class PythonService {


    constructor() {



    }
    public async reRenderManga(req: any) {
        const randomTemp = uuidv4();
        const tmpFile = randomTemp + '.txt'
        const newFile = randomTemp + 's.txt'


        fs.writeFileSync(tmpFile, req.test);
        console.log("ayoa", tmpFile)
        const res = await this.test(tmpFile, newFile, req)
        fs.unlinkSync(tmpFile)
        return res
    }

    public async test(tmpFile: string, newFile: string, req: any) {
        const process = spawnSync('python', ['src/python/main.py', tmpFile, newFile
        ]);
        const result = process.stdout.toString()
        return result
        // // Takes stdout data from script which executed
        // // with arguments and send this data to res object
        // process.stdout.on('data', function (data) {
        //     console.log("ayoa", 1)
        // })
        // process.stderr.on('data', function (data) {
        //     // console.log(typeof (data), "stderr data")
        //     console.log("ayoa", 2)
        //     // responseData += data;
        // });
        // process.stdout.on('end', function (data) {
        //     console.log("ayoa", 3)
        // });
        // process.on('exit', (code) => {
        //     console.log("ayoa", 4)
        //     fs.unlinkSync(tmpFile)
        //     const myResponse = fs.readFileSync(newFile, 'utf-8')
        //     return myResponse
        // });
    }

}