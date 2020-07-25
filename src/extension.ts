// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const insertCode = (val: string) => {
	const editor = vscode.window.activeTextEditor;

	if (!editor) {
			vscode.window.showErrorMessage('Can\'t insert log because no document is open');
			return;
	}

	const selection = editor.selection;

	const range = new vscode.Range(selection.start, selection.end);

	editor.edit((editBuilder) => {
			editBuilder.replace(range, val);
	});
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const editor = vscode.window.activeTextEditor;
	const currentPosition = editor?.selection.active as vscode.Position;

	const addUseState = vscode.commands.registerCommand('extension.useState', () => {
		if (!editor) { return; }

		insertCode('const [,set] = useState();');

		const positionClone = currentPosition.with(currentPosition.line, 7);
    const  newPosition = new vscode.Selection(positionClone, positionClone);
		
		editor.selection = newPosition;

	});

	context.subscriptions.push(addUseState);

	const addUseEffect = vscode.commands.registerCommand('extension.useEffect', () => {
		if (!editor) { return; }

		insertCode('useEffect(() => {}, []);');

		const positionClone = currentPosition.with(currentPosition.line, 17);
    const  newPosition = new vscode.Selection(positionClone, positionClone);
		
		editor.selection = newPosition;

	});


	context.subscriptions.push(addUseEffect);

	const addUseContext = vscode.commands.registerCommand('extension.useContext', () => {
		if (!editor) { return; }

		insertCode('const  = useContext();');

		const positionClone = currentPosition.with(currentPosition.line, 6);
    const  newPosition = new vscode.Selection(positionClone, positionClone);
		
		editor.selection = newPosition;

	});
	
	context.subscriptions.push(addUseContext);

	const addUseRef = vscode.commands.registerCommand('extension.useRef', () => {
		if (!editor) { return; }

		insertCode('const  = useRef();');

		const positionClone = currentPosition.with(currentPosition.line, 6);
    const  newPosition = new vscode.Selection(positionClone, positionClone);
		
		editor.selection = newPosition;

	});
	
	context.subscriptions.push(addUseRef);

	context.subscriptions.push(addUseContext);

	const addUseReducer = vscode.commands.registerCommand('extension.useReducer', () => {
		if (!editor) { return; }

		insertCode('const [state, dispatch] = useReducer( , );');

		const positionClone = currentPosition.with(currentPosition.line, 7);
    const  newPosition = new vscode.Selection(positionClone, positionClone);
		
		editor.selection = newPosition;

	});
	
	context.subscriptions.push(addUseReducer);

	const addUseMemo = vscode.commands.registerCommand('extension.useMemo', () => {
		if (!editor) { return; }

		insertCode('const  = useMemo(() => {}, []);');

		const positionClone = currentPosition.with(currentPosition.line, 6);
    const  newPosition = new vscode.Selection(positionClone, positionClone);
		
		editor.selection = newPosition;

	});
	
	context.subscriptions.push(addUseMemo);

	const addUseCallback = vscode.commands.registerCommand('extension.useCallback', () => {
		if (!editor) { return; }

		insertCode('const  = useCallback(() => {}, []);');

		const positionClone = currentPosition.with(currentPosition.line, 6);
    const  newPosition = new vscode.Selection(positionClone, positionClone);
		
		editor.selection = newPosition;

	});
	
	context.subscriptions.push(addUseCallback);

	const addUseImperativeHandle = vscode.commands.registerCommand('extension.useImperativeHandle', () => {
		if (!editor) { return; }

		insertCode('useImperativeHandle( , () => {}, []);');

		const positionClone = currentPosition.with(currentPosition.line, 21);
    const  newPosition = new vscode.Selection(positionClone, positionClone);
		
		editor.selection = newPosition;

	});
	
	context.subscriptions.push(addUseImperativeHandle);
}

// this method is called when your extension is deactivated
export function deactivate() {}