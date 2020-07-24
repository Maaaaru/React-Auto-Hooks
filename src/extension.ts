// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const addHooks = (val: any) => {
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

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "React-Auto-Hooks" is now active!');

	const addUseState = vscode.commands.registerCommand('extension.useState', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		addHooks('const [,] = useState();');

	});

	context.subscriptions.push(addUseState);

	const addUseEffect = vscode.commands.registerCommand('extension.useEffect', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		addHooks('useEffect(() => {}, []);');

	});
	
	context.subscriptions.push(addUseEffect);

	const addUseContext = vscode.commands.registerCommand('extension.useContext', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		addHooks('const  = useContext();');

	});
	
	context.subscriptions.push(addUseContext);

	const addUseRef = vscode.commands.registerCommand('extension.useRef', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		addHooks('const  = useRef();');

	});
	
	context.subscriptions.push(addUseRef);

	context.subscriptions.push(addUseContext);

	const addUseReducer = vscode.commands.registerCommand('extension.useReducer', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		addHooks('const [state, dispatch] = useReducer( , );');

	});
	
	context.subscriptions.push(addUseReducer);

	const addUseMemo = vscode.commands.registerCommand('extension.useMemo', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		addHooks('const  = useMemo(() => {}, []);');

	});
	
	context.subscriptions.push(addUseMemo);

	const addUseCallback = vscode.commands.registerCommand('extension.useCallback', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		addHooks('const  = useCallback(() => {}, []);');

	});
	
	context.subscriptions.push(addUseCallback);

	const addUseImperativeHandle = vscode.commands.registerCommand('extension.useImperativeHandle', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) { return; }

		addHooks('useImperativeHandle( , () => {}, []);');

	});
	
	context.subscriptions.push(addUseImperativeHandle);
}

// this method is called when your extension is deactivated
export function deactivate() {}